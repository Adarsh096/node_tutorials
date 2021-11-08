const {writeFileSync} = require('fs');

for(let i = 0; i<100000; i++){
    writeFileSync('./content/big_file.txt',`hello world ${i}`,{flag:'a'});
}
