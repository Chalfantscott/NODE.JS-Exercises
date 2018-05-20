const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('what\'s the filename?', (filename) => {
    rl.close();
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            console.log(filename + ' does not exist');
            return;
        }
        console.log(data.toUpperCase());
    })
})