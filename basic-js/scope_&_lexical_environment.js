/**
 
Scope => where you can access specific var or func in the code. Scope is dependent on lexical environment

Lexical scope means where variable is available based on where they are written in code. 

Wherever an execution context is created, a lexical environment is created.

Lexical environment is the local memory With lexical environment of it's parent.
 */

// c function's lexical parents is a() and a() lexical parent is global.

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b); 
        /**
         Now JS will try to find b in lexical environment of c, if not found, then it will search in a(), still not found then it will search in global scope

         JS will look for var/func in local scope, if not found, it keeps on searching the lexical environment of its parent till it's found. THAT IS CALLED SCOPE CHAIN
         */
    }
}

a();