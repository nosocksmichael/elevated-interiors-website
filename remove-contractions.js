const fs = require('fs');
const path = require('path');

function expandContractions(content) {
  let fixed = content;
  
  // Common contractions
  fixed = fixed.replace(/don't/g, 'do not');
  fixed = fixed.replace(/Don't/g, 'Do not');
  fixed = fixed.replace(/doesn't/g, 'does not');
  fixed = fixed.replace(/Doesn't/g, 'Does not');
  fixed = fixed.replace(/we're/g, 'we are');
  fixed = fixed.replace(/We're/g, 'We are');
  fixed = fixed.replace(/you're/g, 'you are');
  fixed = fixed.replace(/You're/g, 'You are');
  fixed = fixed.replace(/it's/g, 'it is');
  fixed = fixed.replace(/It's/g, 'It is');
  fixed = fixed.replace(/that's/g, 'that is');
  fixed = fixed.replace(/That's/g, 'That is');
  fixed = fixed.replace(/what's/g, 'what is');
  fixed = fixed.replace(/What's/g, 'What is');
  fixed = fixed.replace(/who's/g, 'who is');
  fixed = fixed.replace(/Who's/g, 'Who is');
  fixed = fixed.replace(/isn't/g, 'is not');
  fixed = fixed.replace(/Isn't/g, 'Is not');
  fixed = fixed.replace(/aren't/g, 'are not');
  fixed = fixed.replace(/Aren't/g, 'Are not');
  fixed = fixed.replace(/wasn't/g, 'was not');
  fixed = fixed.replace(/Wasn't/g, 'Was not');
  fixed = fixed.replace(/weren't/g, 'were not');
  fixed = fixed.replace(/Weren't/g, 'Were not');
  fixed = fixed.replace(/haven't/g, 'have not');
  fixed = fixed.replace(/Haven't/g, 'Have not');
  fixed = fixed.replace(/hasn't/g, 'has not');
  fixed = fixed.replace(/Hasn't/g, 'Has not');
  fixed = fixed.replace(/can't/g, 'cannot');
  fixed = fixed.replace(/Can't/g, 'Cannot');
  fixed = fixed.replace(/won't/g, 'will not');
  fixed = fixed.replace(/Won't/g, 'Will not');
  fixed = fixed.replace(/wouldn't/g, 'would not');
  fixed = fixed.replace(/Wouldn't/g, 'Would not');
  fixed = fixed.replace(/shouldn't/g, 'should not');
  fixed = fixed.replace(/Shouldn't/g, 'Should not');
  fixed = fixed.replace(/couldn't/g, 'could not');
  fixed = fixed.replace(/Couldn't/g, 'Could not');
  fixed = fixed.replace(/I'm/g, 'I am');
  fixed = fixed.replace(/you've/g, 'you have');
  fixed = fixed.replace(/You've/g, 'You have');
  fixed = fixed.replace(/we've/g, 'we have');
  fixed = fixed.replace(/We've/g, 'We have');
  fixed = fixed.replace(/they've/g, 'they have');
  fixed = fixed.replace(/They've/g, 'They have');
  fixed = fixed.replace(/I've/g, 'I have');
  fixed = fixed.replace(/let's/g, 'let us');
  fixed = fixed.replace(/Let's/g, 'Let us');
  
  return fixed;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = expandContractions(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
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
