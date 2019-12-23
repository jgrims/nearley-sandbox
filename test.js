const nearley = require('nearley');
const poweron = require('./poweron.js');
const fs = require('fs');

// const moo = require('moo')

// let lexer = moo.states({
//     default: {
//         whitespace:  { match: /\s+/, lineBreaks: true },
//         commentStart: { match: /[\[]/, push: 'comment' },
//         number:  { match: /0|[1-9][0-9]*/ },
//         string:  { match: /"(?:\\["\\]|[^\n"\\])*"/ },
//         equals: '=',
//         logicalop: ['<>', '>', '<', '>=', '<=', 'AND', 'OR', 'NOT'],
//         arithmeticop: ['+', '-', '*', '/'],
//         preprocessor: '#',
//         percent: '%',
//         comma: ',',
//         lparen: '(',
//         rparen: ')',
//         colon: ':',
//         identifier: { match: /[a-zA-Z0-9]+/ }
//     },
//     comment:  {
//         commentEnd: { match: /[\]]/, pop: true },
//         commentStart: { match: /[\[]/, push: 'comment' },
//         commentText: { match: /[^\[\]]+/, lineBreaks: true }
//     }
// });

let text = fs.readFileSync('example.po').toString();
// let tokens = [];

// lexer.reset(text);
// while (true){
//     let token = lexer.next();
//     tokens.push(token);
//     if (token === undefined ) { break; }
// }

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(poweron));

parser.feed(text);

//fs.writeFileSync('testOutput.json', JSON.stringify(tokens));