const nearley = require('nearley');
const poweron = require('./poweron.js');
const fs = require('fs');

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(poweron));

let input = fs.readFileSync('example.po').toString();
//fs.writeFileSync('parserInput.txt', input);

try {
    parser.feed(input);
    let results = parser.finish();
    console.log("length of results: " + results.length);
    fs.writeFileSync('parserOutput.json', JSON.stringify(results));
}
catch (err) {
    console.log("ERROR: " + JSON.stringify(err));
}

