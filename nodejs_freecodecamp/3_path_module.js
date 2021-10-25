const path = require('path');

// system based path separater :
console.log(path.sep);

const filePath = path.join('node_tuts','nodejs_freecodecamp','3_os_module.js');
console.log(filePath);

//to get absolute path of a file/directory wrt the current directory obtained by __dirname global variable:
const absolute = path.resolve(__dirname,'../express_rest_api/')
console.log(absolute);

// to get the file name or the last entry of a file path :
let basePath = path.basename(absolute)
console.log(basePath)

