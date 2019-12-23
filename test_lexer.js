const lexer = require('./lexer');
const fs = require('fs');

let text = fs.readFileSync('example.po').toString();
let tokens = [];

lexer.reset(text);
while (true){
    let token = lexer.next();
    tokens.push(token);
    if (token === undefined ) { break; }
}

fs.writeFileSync('lexerOutput.json', JSON.stringify(tokens));