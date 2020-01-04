// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


const lexer = require('./lexer');

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "specfile$ebnf$1", "symbols": []},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["divDefine"]},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["divSetup"]},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["target"]},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["include"]},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["comment"]},
    {"name": "specfile$ebnf$1$subexpression$1", "symbols": ["_", "keyword"]},
    {"name": "specfile$ebnf$1", "symbols": ["specfile$ebnf$1", "specfile$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "specfile", "symbols": ["specfile$ebnf$1"]},
    {"name": "divDefine$subexpression$1", "symbols": [{"literal":"define"}]},
    {"name": "divDefine$subexpression$1", "symbols": [{"literal":"DEFINE"}]},
    {"name": "divDefine$ebnf$1", "symbols": []},
    {"name": "divDefine$ebnf$1$subexpression$1", "symbols": ["assignment"]},
    {"name": "divDefine$ebnf$1$subexpression$1", "symbols": ["include"]},
    {"name": "divDefine$ebnf$1$subexpression$1", "symbols": ["definition"]},
    {"name": "divDefine$ebnf$1$subexpression$1", "symbols": ["arrayDef"]},
    {"name": "divDefine$ebnf$1$subexpression$1", "symbols": ["arrayAssign"]},
    {"name": "divDefine$ebnf$1$subexpression$1", "symbols": ["comment"]},
    {"name": "divDefine$ebnf$1", "symbols": ["divDefine$ebnf$1", "divDefine$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "divDefine$subexpression$2", "symbols": [{"literal":"end"}]},
    {"name": "divDefine$subexpression$2", "symbols": [{"literal":"END"}]},
    {"name": "divDefine", "symbols": ["_", "divDefine$subexpression$1", "__", "divDefine$ebnf$1", "__", "divDefine$subexpression$2"]},
    {"name": "divSetup$subexpression$1", "symbols": [{"literal":"setup"}]},
    {"name": "divSetup$subexpression$1", "symbols": [{"literal":"SETUP"}]},
    {"name": "divSetup$ebnf$1", "symbols": []},
    {"name": "divSetup$ebnf$1$subexpression$1", "symbols": ["assignment"]},
    {"name": "divSetup$ebnf$1$subexpression$1", "symbols": ["include"]},
    {"name": "divSetup$ebnf$1$subexpression$1", "symbols": ["arrayAssign"]},
    {"name": "divSetup$ebnf$1$subexpression$1", "symbols": ["comment"]},
    {"name": "divSetup$ebnf$1", "symbols": ["divSetup$ebnf$1", "divSetup$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "divSetup$subexpression$2", "symbols": [{"literal":"end"}]},
    {"name": "divSetup$subexpression$2", "symbols": [{"literal":"END"}]},
    {"name": "divSetup", "symbols": ["_", "divSetup$subexpression$1", "__", "divSetup$ebnf$1", "__", "divSetup$subexpression$2"]},
    {"name": "include$subexpression$1", "symbols": [{"literal":"include"}]},
    {"name": "include$subexpression$1", "symbols": [{"literal":"INCLUDE"}]},
    {"name": "include", "symbols": ["_", (lexer.has("hash") ? {type: "hash"} : hash), "include$subexpression$1", "__", (lexer.has("string") ? {type: "string"} : string)]},
    {"name": "target$subexpression$1", "symbols": [{"literal":"target"}]},
    {"name": "target$subexpression$1", "symbols": [{"literal":"TARGET"}]},
    {"name": "target", "symbols": ["_", "target$subexpression$1", "_", {"literal":"="}, "_", "recordType"]},
    {"name": "assignment", "symbols": ["_", "ident", "_", {"literal":"="}, "_", "value"]},
    {"name": "definition", "symbols": ["_", "ident", "_", {"literal":"="}, "_", "dataType"]},
    {"name": "arrayDef$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "arrayDef$subexpression$1", "symbols": ["ident"]},
    {"name": "arrayDef", "symbols": ["_", "ident", "_", {"literal":"="}, "_", "array", "__", "dataType", {"literal":"("}, "_", "arrayDef$subexpression$1", "_", {"literal":")"}]},
    {"name": "arrayAssign$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "arrayAssign$subexpression$1", "symbols": ["ident"]},
    {"name": "arrayAssign$subexpression$2", "symbols": ["value"]},
    {"name": "arrayAssign$subexpression$2", "symbols": ["ident"]},
    {"name": "arrayAssign", "symbols": ["_", "ident", "_", {"literal":"("}, "_", "arrayAssign$subexpression$1", "_", {"literal":")"}, "_", {"literal":"="}, "_", "arrayAssign$subexpression$2"]},
    {"name": "value", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": id},
    {"name": "value", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": id},
    {"name": "value", "symbols": ["recordType", {"literal":":"}, "ident"], "postprocess": d => d[0] + d[1] + d[2]},
    {"name": "comment", "symbols": ["_", (lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "ident", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": id},
    {"name": "dataType", "symbols": [(lexer.has("kwDataType") ? {type: "kwDataType"} : kwDataType)], "postprocess": id},
    {"name": "array", "symbols": [(lexer.has("kwArray") ? {type: "kwArray"} : kwArray)], "postprocess": id},
    {"name": "division", "symbols": [(lexer.has("kwDivision") ? {type: "kwDivision"} : kwDivision)], "postprocess": id},
    {"name": "function", "symbols": [(lexer.has("kwFunction") ? {type: "kwFunction"} : kwFunction)], "postprocess": id},
    {"name": "keyword", "symbols": [(lexer.has("keyword") ? {type: "keyword"} : keyword)], "postprocess": id},
    {"name": "term", "symbols": [(lexer.has("kwProgrammingTerm") ? {type: "kwProgrammingTerm"} : kwProgrammingTerm)], "postprocess": id},
    {"name": "recordType", "symbols": [(lexer.has("kwRecordType") ? {type: "kwRecordType"} : kwRecordType)], "postprocess": id},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": ["_", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": d => null},
    {"name": "__", "symbols": [(lexer.has("whitespace") ? {type: "whitespace"} : whitespace)]},
    {"name": "__", "symbols": ["__", (lexer.has("whitespace") ? {type: "whitespace"} : whitespace)], "postprocess": d => null}
]
  , ParserStart: "specfile"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
