const fs = require('fs');
console.log('Inicio');
fs.writeFile('arquivo.txt', "oi", ()=>{
    setTimeout(()=>{
        console.log("Arquivo Criado")
    }, 1000)
});
console.log('Fim!');
