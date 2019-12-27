// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


const lexer = require('./lexer');

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "specfile$ebnf$1", "symbols": []},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["comments"]},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["divisions"]},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["include"]},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["keywords"]},
    {"name": "specfile$ebnf$1", "symbols": ["specfile$ebnf$1", "specfile$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "specfile", "symbols": ["specfile$ebnf$1"]},
    {"name": "comments", "symbols": ["_", (lexer.has("comment") ? {type: "comment"} : comment)]},
    {"name": "comments", "symbols": ["comments", "_", (lexer.has("comment") ? {type: "comment"} : comment)]},
    {"name": "keywords", "symbols": ["_", (lexer.has("keyword") ? {type: "keyword"} : keyword)]},
    {"name": "keywords", "symbols": ["keywords", "__", (lexer.has("keyword") ? {type: "keyword"} : keyword)]},
    {"name": "divisions$subexpression$1", "symbols": ["divTarget"]},
    {"name": "divisions$subexpression$1", "symbols": ["divDefine"]},
    {"name": "divisions$subexpression$1", "symbols": ["divSetup"]},
    {"name": "divisions$subexpression$1", "symbols": ["divPrint"]},
    {"name": "divisions", "symbols": ["divisions$subexpression$1"]},
    {"name": "divisions$subexpression$2", "symbols": ["divTarget"]},
    {"name": "divisions$subexpression$2", "symbols": ["divDefine"]},
    {"name": "divisions$subexpression$2", "symbols": ["divSetup"]},
    {"name": "divisions$subexpression$2", "symbols": ["divPrint"]},
    {"name": "divisions", "symbols": ["divisions", "_", "divisions$subexpression$2"]},
    {"name": "divTarget$subexpression$1", "symbols": [{"literal":"target"}]},
    {"name": "divTarget$subexpression$1", "symbols": [{"literal":"TARGET"}]},
    {"name": "divTarget", "symbols": ["_", "divTarget$subexpression$1", "_", {"literal":"="}, "_", (lexer.has("kwRecordType") ? {type: "kwRecordType"} : kwRecordType), "_"]},
    {"name": "divDefine$subexpression$1", "symbols": [{"literal":"define"}]},
    {"name": "divDefine$subexpression$1", "symbols": [{"literal":"DEFINE"}]},
    {"name": "divDefine$subexpression$2", "symbols": [{"literal":"end"}]},
    {"name": "divDefine$subexpression$2", "symbols": [{"literal":"END"}]},
    {"name": "divDefine", "symbols": ["_", "divDefine$subexpression$1", "__", "defines", "__", "divDefine$subexpression$2"]},
    {"name": "defines$subexpression$1", "symbols": ["variableDeclaration"]},
    {"name": "defines$subexpression$1", "symbols": ["arrayDeclaration"]},
    {"name": "defines$subexpression$1", "symbols": ["include"]},
    {"name": "defines", "symbols": ["defines$subexpression$1"]},
    {"name": "defines$subexpression$2", "symbols": ["variableDeclaration"]},
    {"name": "defines$subexpression$2", "symbols": ["arrayDeclaration"]},
    {"name": "defines$subexpression$2", "symbols": ["include"]},
    {"name": "defines", "symbols": ["defines", "__", "defines$subexpression$2"]},
    {"name": "variableDeclaration", "symbols": ["_", (lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", (lexer.has("kwDataType") ? {type: "kwDataType"} : kwDataType), "_"]},
    {"name": "arrayDeclaration", "symbols": ["_", (lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", (lexer.has("kwArray") ? {type: "kwArray"} : kwArray), "__", (lexer.has("kwDataType") ? {type: "kwDataType"} : kwDataType), {"literal":"("}, "_", (lexer.has("number") ? {type: "number"} : number), "_", {"literal":")"}]},
    {"name": "divSetup$subexpression$1", "symbols": [{"literal":"setup"}]},
    {"name": "divSetup$subexpression$1", "symbols": [{"literal":"SETUP"}]},
    {"name": "divSetup$subexpression$2", "symbols": [{"literal":"this"}]},
    {"name": "divSetup$subexpression$3", "symbols": [{"literal":"end"}]},
    {"name": "divSetup$subexpression$3", "symbols": [{"literal":"END"}]},
    {"name": "divSetup", "symbols": ["_", "divSetup$subexpression$1", "__", "divSetup$subexpression$2", "__", "divSetup$subexpression$3"]},
    {"name": "divPrint$subexpression$1", "symbols": [{"literal":"print"}]},
    {"name": "divPrint$subexpression$1", "symbols": [{"literal":"PRINT"}]},
    {"name": "divPrint$subexpression$2", "symbols": [{"literal":"that"}]},
    {"name": "divPrint$subexpression$3", "symbols": [{"literal":"end"}]},
    {"name": "divPrint$subexpression$3", "symbols": [{"literal":"END"}]},
    {"name": "divPrint", "symbols": ["_", "divPrint$subexpression$1", "__", "divPrint$subexpression$2", "__", "divPrint$subexpression$3"]},
    {"name": "include$subexpression$1", "symbols": [{"literal":"include"}]},
    {"name": "include$subexpression$1", "symbols": [{"literal":"INCLUDE"}]},
    {"name": "include", "symbols": ["_", (lexer.has("hash") ? {type: "hash"} : hash), "include$subexpression$1", "__", (lexer.has("string") ? {type: "string"} : string), "_"]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": d => null},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("whitespace") ? {type: "whitespace"} : whitespace)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": d => null}
]
  , ParserStart: "specfile"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
