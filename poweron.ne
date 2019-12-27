@{%

const lexer = require('./lexer');

%}

@lexer lexer

specfile -> (comments | divisions | include | keywords):*

comments -> _ %comment
          | comments _ %comment

keywords -> _ %keyword
          | keywords __ %keyword

divisions -> ( divTarget | divDefine | divSetup | divPrint )
           | divisions _ ( divTarget | divDefine | divSetup | divPrint )

divTarget -> _ ("target"|"TARGET") _ "=" _ %kwRecordType _ 

divDefine -> _ ("define"|"DEFINE") __  defines __ ("end"|"END") 
defines -> (variableDeclaration | arrayDeclaration | include)
         | defines __ (variableDeclaration | arrayDeclaration | include)
variableDeclaration -> _ %identifier _ "=" _ %kwDataType _ 
arrayDeclaration -> _ %identifier _ "=" _ %kwArray __ %kwDataType "(" _ %number _ ")" 

divSetup  -> _ ("setup"|"SETUP")   __  ("this") __ ("end"|"END")  
divPrint  -> _ ("print"|"PRINT")   __  ("that") __ ("end"|"END") 

include -> _ %hash ("include"|"INCLUDE") __ %string _ 


_ -> %whitespace:* {% d => null %}
__ -> %whitespace:+ {% d => null %} 