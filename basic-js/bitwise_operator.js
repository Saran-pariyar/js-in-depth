/** Bitwise operator (BO)
 * BO treat their operands as sequence of 32 bits (0 and 1), then performs operation then give us standard numeric values

 16 8 4 2 1 => 5 bits number
 32 16 8 4 2 1 => 6 bits number
 4 2 1 => 3 bits number

00110 => that is 6 in 5 bits

11011
 * **/

// & operator

// console.log( 1 & 2) // answer = 0
/**  
 * comparing 1 and 2 in binary
 
     0 0 0 1 
     0 0 1 0
    _________
     F F F F
    _________
     0 0 0 0    => answer is only 0

     So we get 0 as result when (1 & 2)

*/

// console.log (7 & 6) // answer is 6
/**  
 * comparing 7 and 6 in binary
 
     0 1 1 1 
     0 1 1 0
    _________
     F T T F
    _________
     0 1 1 0    => answer is only 6

     So we get 6 as result when (7 & 6)

*/

// OR | operator

// console.log(7 | 6) // 7
/**  
 * comparing 7 and 6 in binary
 * In OR operator, if at least one have true, it will return true
 
     0 1 1 1 
     0 1 1 0
    _________
     F T T T
    _________
     0 1 1 1    => the answer is 7

     So we get 7 as result when (7 | 6)

*/

// XOR operator

console.log(7 ^ 6); //answer = 3

/**
 * in XOR ^ operator, if both are true then it's 0. If one is true then it is 1. Both false is both 0
    
     0 1 1 1 
     0 1 1 0
    _________
     F F F T
    _________
     0 0 0 1    => the answer is 1

     So we get 7 as result when (7 ^ 6)


 */