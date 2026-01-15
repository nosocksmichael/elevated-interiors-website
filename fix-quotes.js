const fs = require('fs');
const path = require('path');

function getAllTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const tsxFiles = getAllTsxFiles('./src');

tsxFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace curly quotes with straight quotes
  content = content.replace(/'/g, "'");  // Right single quotation mark
  content = content.replace(/'/g, "'");  // Left single quotation mark
  content = content.replace(/"/g, '"');  // Left double quotation mark
  content = content.replace(/"/g, '"');  // Right double quotation mark
  content = content.replace(/—/g, '-');  // Em dash
  content = content.replace(/–/g, '-');  // En dash
  content = content.replace(/™/g, '(TM)'); // Trademark symbol

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
});

console.log('\nAll files fixed!');
