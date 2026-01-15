const fs = require('fs');
const path = require('path');

function fixQuotes(content) {
  // Replace all curly quotes and special characters
  let fixed = content;
  
  // Curly single quotes to straight
  fixed = fixed.replace(/'/g, "'");
  fixed = fixed.replace(/'/g, "'");
  
  // Curly double quotes to straight
  fixed = fixed.replace(/"/g, '"');
  fixed = fixed.replace(/"/g, '"');
  
  // Em dash and en dash to hyphen
  fixed = fixed.replace(/—/g, '-');
  fixed = fixed.replace(/–/g, '-');
  
  // Ellipsis
  fixed = fixed.replace(/…/g, '...');
  
  // Trademark
  fixed = fixed.replace(/™/g, '(TM)');
  
  return fixed;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`No changes needed: ${filePath}`);
      return false;
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return false;
  }
}

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next')) {
        getAllFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

const allFiles = getAllFiles('./src');
let fixedCount = 0;

allFiles.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\nTotal files fixed: ${fixedCount}`);
