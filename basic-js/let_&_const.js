/**  Let & const are hoisted but cant access before initialization of a value.
    window object cannot access let & const variable 
    temporal dead zone is the time between the variable is hoisted and assigned a value

    Error in operation when value is not of expected type => Type error
    mistake in code that violates language rules => Syntax error
    When JS try to find specific var in memory but can't => reference error

    Code inside curly bracket s called block.
    Block values are stored inside separate memory than global. 


*/

// Block is used to combine multiple js statement in 1 group.
// block also follows lexical pattern, it will search for parent if not found a var
// Example:

// single statement
if(true) console.log(1);

if(true){
    // now we can give multiple statements
}



var a = 100;
{
 var a = 10;
 console.log(a);
}
 console.log(a); // returns 10, because var a of block scope shadowed one in global scope
 // shadowing is not allowed in let and const (see image). 
 //(see img) See in dev tools how it stores block scope variable in block section and one in global environment in Script section 
 