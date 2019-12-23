@{%

const lexer = require('lexer');

%}

@lexer lexer

# Base token types
comment -> _ %commentStart %commentText:* %commentEnd _ {% id %}
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