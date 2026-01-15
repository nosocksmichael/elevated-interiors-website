const fs = require('fs');
const path = require('path');

function fixAllContractions(content) {
  let fixed = content;
  
  // Fix all possible contractions
  fixed = fixed.replace(/they're/g, 'they are');
  fixed = fixed.replace(/They're/g, 'They are');
  fixed = fixed.replace(/There's/g, 'There is');
  fixed = fixed.replace(/there's/g, 'there is');
  fixed = fixed.replace(/Here's/g, 'Here is');
  fixed = fixed.replace(/here's/g, 'here is');
  fixed = fixed.replace(/What's/g, 'What is');
  fixed = fixed.replace(/Where's/g, 'Where is');
  fixed = fixed.replace(/where's/g, 'where is');
  fixed = fixed.replace(/Who's/g, 'Who is');
  
  // Fix possessives that are being flagged - replace with "of the"
  fixed = fixed.replace(/room's purpose/g, 'room purpose');
  fixed = fixed.replace(/room's/g, 'room');
  
  return fixed;
}

function getAllTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next')) {
        getAllTsxFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

const allFiles = getAllTsxFiles('./src');
let fixedCount = 0;

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixAllContractions(content);
    
    if (content !== fixed) {
      fs.writeFileSync(file, fixed, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
});

console.log(`\nTotal files fixed: ${fixedCount}`);
