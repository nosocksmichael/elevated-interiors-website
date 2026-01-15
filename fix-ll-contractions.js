const fs = require('fs');

const files = [
  'src/app/consultation/ConsultationForm.tsx',
  'src/app/services/accent-walls/page.tsx',
  'src/app/services/consultation/page.tsx',
  'src/app/services/page.tsx'
];

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/You'll/g, 'You will');
    content = content.replace(/We'll/g, 'We will');
    content = content.replace(/They'll/g, 'They will');
    content = content.replace(/I'll/g, 'I will');
    content = content.replace(/She'll/g, 'She will');
    content = content.replace(/He'll/g, 'He will');
    content = content.replace(/you'll/g, 'you will');
    content = content.replace(/we'll/g, 'we will');
    content = content.replace(/they'll/g, 'they will');
    content = content.replace(/i'll/g, 'i will');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
});
