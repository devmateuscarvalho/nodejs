const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Qual a sua linguagem preferida? ", (language)=>{
    if(language === "python"){
    console.log(`Isso nem é linguagem`)}
    else{
        console.log(`A sua linguagem favorita é: ${language}`)
    }
    readline.close();
})