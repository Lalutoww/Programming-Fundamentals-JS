function extractFile(path) {
   let dirs = path.split('\\');
   let file = dirs.pop();
   let fileTokens = file.split('.');
   let extension = fileTokens.pop();

   console.log(`File name: ${fileTokens.join('.')}`);
   console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
