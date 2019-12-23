const nearley = require('nearley');
const poweron = require('./poweron.js');
const fs = require('fs');

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(poweron));

parser.feed(fs.readFileSync('example.po').toString());

fs.writeFileSync('parserOutput.json', JSON.stringify(parser.results));