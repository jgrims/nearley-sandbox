// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


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

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "comment$ebnf$1", "symbols": []},
    {"name": "comment$ebnf$1", "symbols": ["comment$ebnf$1", (lexer.has("commentText") ? {type: "commentText"} : commentText)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "comment", "symbols": [(lexer.has("commentStart") ? {type: "commentStart"} : commentStart), "comment$ebnf$1", (lexer.has("commentEnd") ? {type: "commentEnd"} : commentEnd)], "postprocess": id},
    {"name": "number", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "string", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "oparithmetic", "symbols": [(lexer.has("arithmeticop") ? {type: "arithmeticop"} : arithmeticop)], "postprocess": id},
    {"name": "oplogical", "symbols": [(lexer.has("logicalop") ? {type: "logicalop"} : logicalop)], "postprocess": id},
    {"name": "lparen", "symbols": [(lexer.has("lparen") ? {type: "lparen"} : lparen)], "postprocess": id},
    {"name": "rparen", "symbols": [(lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": id},
    {"name": "colon", "symbols": [(lexer.has("colon") ? {type: "colon"} : colon)], "postprocess": id},
    {"name": "identifier", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "keyword", "symbols": [(lexer.has("keyword") ? {type: "keyword"} : keyword)], "postprocess": id},
    {"name": "equals", "symbols": [(lexer.has("equals") ? {type: "equals"} : equals)], "postprocess": id},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": [(lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function(d) { return null; }}
]
  , ParserStart: "comment"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
