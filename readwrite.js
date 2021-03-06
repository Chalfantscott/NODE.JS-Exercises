const fs = require('fs');
const readline = require('readline');
const dns = require('dns');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('what\'s the input?', (input) => {
    rl.question('what is the output?', (outputFilename) => {
        rl.close();

        fs.readFile(input, 'utf8', (inputErr, inputData) => {
            if (inputErr) {return console.log(inputErr);}
            let outputData = inputData.toUpperCase();
            fs.writeFile(outputFilename, outputData, (outputErr) => {
                if (outputErr) {return console.log(outputErr)}
                return console.log('writing file ' + input + ' to ' + outputFilename + ' was successful!')
            })
        })
    })
})
