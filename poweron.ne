@{%

/*
A simple lexer for PowerOn specfiles.
*/
const moo = require('moo')

let lexer = moo.states({
    default: {
        whitespace:  { match: /\s+/, lineBreaks: true },
        commentStart: { match: /[\[]/, push: 'comment' },
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

%}

@lexer lexer

# Base token types
comment -> %commentStart %commentText:* %commentEnd {% id %}
number -> %number {% id %}
string -> %string {% id %}
oparithmetic -> %arithmeticop {% id %}
oplogical -> %logicalop {% id %}
lparen -> %lparen {% id %}
rparen -> %rparen {% id %}
colon -> %colon {% id %}
identifier -> %identifier {% id %}
keyword -> %keyword {% id %}
equals -> %equals {% id %}

_ -> null | %whitespace {% function(d) { return null; } %} 