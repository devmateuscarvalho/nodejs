const path = require('path');


//path absoluto
console.log(path.resolve('teste.txt'), "-->Absolute Path")

//formar path
const midFolder = "relatórios"
const fileName = "mateus.txt"
const finalPath = path.join("/", 'arquivos', midFolder, fileName);
console.log(finalPath, "--> final path");