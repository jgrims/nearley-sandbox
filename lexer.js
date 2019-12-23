/*
A simple lexer for PowerOn specfiles.
*/
const moo = require('moo')

let lexer = moo.states({
    default: {
        whitespace:  { match: /\s+/, lineBreaks: true },
        commentStart: { match: /[\[]/, push: 'comment' },
        commentEnd: { match: /[\]]/ },
        number:  { match: /0|[1-9][0-9]*/ },
        string:  { match: /"(?:\\["\\]|[^\n"\\])*?"/ },
        equals: '=',
        logicalop: ['<>', '>', '<', '>=', '<=', 'AND', 'OR', 'NOT'],
        arithmeticop: ['+', '-', '*', '/'],
        preprocessor: '#',
        percent: '%',
        comma: ',',
        lparen: '(',
        rparen: ')',
        colon: ':',
        identifier: { match: /[a-zA-Z0-9]+/ }
    },
    comment:  {
        commentEnd: { match: /[\]]/, pop: true },
        commentStart: { match: /[\[]/, push: 'comment' },
        commentText: { match: /[^\[\]]+/, lineBreaks: true }
    }
});

module.exports = lexer;