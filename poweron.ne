@{%

const lexer = require('./lexer');

%}

@lexer lexer

# The grand scheme of things.
specfile -> (divDefine | divSetup | target | include | comment | _ keyword):*

# Divisions
divDefine -> _ ("define"|"DEFINE") __  (assignment | include | definition | arrayDef | arrayAssign | comment):* __ ("end"|"END")
divSetup  -> _ ("setup"|"SETUP") __  (assignment | include | arrayAssign | comment):* __ ("end"|"END")



# Compound statements.
include     -> _ %hash ("include"|"INCLUDE") __ %string
target      -> _ ("target"|"TARGET") _ "=" _ recordType
assignment  -> _ ident _ "=" _ value
definition  -> _ ident _ "=" _ dataType
arrayDef    -> _ ident _ "=" _ array __ dataType "(" _ (%number | ident) _ ")"
arrayAssign -> _ ident _ "(" _ (%number | ident) _ ")" _ "=" _ (value | ident)


# Primitives, accounting for each possible token type from the lexer.
value -> %string {% id %}
       | %number {% id %}
       | recordType ":" ident {% d => d[0] + d[1] + d[2] %}
comment     -> _ %comment           {% id %}
ident       -> %identifier          {% id %}
dataType    -> %kwDataType          {% id %}
array       -> %kwArray             {% id %}
division    -> %kwDivision          {% id %}
function    -> %kwFunction          {% id %}
keyword     -> %keyword             {% id %}
term        -> %kwProgrammingTerm   {% id %}
recordType  -> %kwRecordType        {% id %}

# Whitespace
_ -> null | _ %whitespace {% d => null %}
__ -> %whitespace | __ %whitespace {% d => null %} 