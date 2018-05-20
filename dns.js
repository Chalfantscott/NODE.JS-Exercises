const fs = require('fs');
const readline = require('readline');
const dns = require('dns');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('what\'s the Domain Name?', (domain) => {
    rl.close();

    dns.lookup(domain, (err, address, family) => {
        if (err) {
            console.log(err);
            console.log(domain + ' does not exist');
            return;
        }
        console.log('address: %j family: IPv%s', address, family);
    });
});