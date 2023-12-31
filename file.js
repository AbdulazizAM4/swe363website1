const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
 
const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);
 
const directSrc = process.argv[2];
const directTar = process.argv[3];
 
async function copy(directSrc, directTar, extensions) {
  try {
    const files = await readdir(directSrc);
 
    for (const file of files) {
      const fileExtension = path.extname(file).toLowerCase();
 
      if (extensions.includes(fileExtension)) {
        const pathSrc = path.join(directSrc, file);
        const pathTar = path.join(directTar, file);
 
        await copyFile(pathSrc, pathTar);
        console.log(`${file} is copied.`);
      }
    }
  } catch (err) {
    console.error('Error while copying', err);
  }
}
 
const allowedExtensions = ['.txt', '.jpg'];
 
copy(directSrc, directTar, allowedExtensions);