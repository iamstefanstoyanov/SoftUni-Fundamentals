function solve(filePath){
    let fileNameIStart = filePath.lastIndexOf('\\') + 1;
    let fileExtensionStart = filePath.lastIndexOf('.') + 1;
    let fileNameIEnd = fileExtensionStart - 1;
    let fileName = filePath.substring(fileNameIStart, fileNameIEnd);
    let fileExtension = filePath.substring(fileExtensionStart);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx')
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')