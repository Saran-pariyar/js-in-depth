/**
 Closure :Function bundled with its lexical environment is known as a closure.

 Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure

 Closure is created every time a func is created.

 */

 function x(){
    // This will print 6 for six time because of i points to same memory location as i is a global object.
    // to make it print 1,2,3,4,5 we need to use 'let', then it will create new i for each iteration cause is let scope.
    for(var i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 1000)
    }
 }


 x()