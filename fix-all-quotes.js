const fs = require('fs');

const fixes = {
  'src/app/about/page.tsx': {
    search: "'Space Upscale Experts fighting the Renovation Industrial Complex. Learn why we built The Loveable Spaces Framework(TM) and how we're transforming GTA homes.',",
    replace: "'Space Upscale Experts fighting the Renovation Industrial Complex. Learn why we built The Loveable Spaces Framework(TM) and how we are transforming GTA homes.',"
  },
  'src/app/framework/page.tsx': {
    search: "'Deep conversation about how you live, work, and use your space. What's working, what's not.',",
    replace: "'Deep conversation about how you live, work, and use your space. What is working, what is not.',"
  },
  'src/app/services/consultation/page.tsx': {
    search: "'Get clarity and direction for your space transformation. Expert guidance, actionable solutions, honest advice about what's possible.',",
    replace: "'Get clarity and direction for your space transformation. Expert guidance, actionable solutions, honest advice about what is possible.',"
  },
  'src/app/services/page.tsx': {
    search: "'Not Sure Which Service You Need?',",
    replace: "'Not Sure Which Service You Need?',"
  }
};

for (const [file, {search, replace}] of Object.entries(fixes)) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes(search)) {
      content = content.replace(search, replace);
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
    } else {
      console.log(`Pattern not found in ${file}, checking for curly quotes...`);
      // Replace all curly quotes
      const original = content;
      content = content.replace(/'/g, "'");
      content = content.replace(/'/g, "'");
      content = content.replace(/"/g, '"');
      content = content.replace(/"/g, '"');
      content = content.replace(/—/g, '-');
      content = content.replace(/–/g, '-');
      if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Replaced curly quotes in ${file}`);
      }
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
}

console.log('Done!');
