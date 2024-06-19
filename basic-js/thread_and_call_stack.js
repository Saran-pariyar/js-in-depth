/**
 * THREAD OF EXECUTION
 * 
 * JS is a single-threaded language. 
 * Single-thread means, there is single thread where task will be done one by one sequentially
 * That means JS finish one task and then move to another task.
 * JS Synchronous language with asynchronous capabilities. 
 * A thread has a call stack & memory
 */

// Now learn call-stack

/**
 * Call-stack is a data structure.
 * It follows LIFO (last in first out)
 */

// Execution Context
/**
 * When we run JS code, a special environment is created to handle the execution of code. It is execution context.
 * It contains currently running code 
 * There is global execution context as well as function execution context for every function called.
 * 
 * There are two phase of Execution context phase
 (Our code goes through 2 phases when executing.)
 
 * 1. Memory Creation Phase
    Creates global object. (Browser = window, Nodejs=global)
    That means after we execute our code, then only we can use window object in browser console (window.innerHeight)

    Also it creates "this" object (it's same as window.) and bind it to global object (i.e window object)

    setup memory heap for storing variables and entire function reference. Those func and var set to "undefined"

 
 * 2. Execution Phase
    Executes code line by line. Places value of each variables. Skips function because nothing to execute there.
    Creates new execution context again for each function call. (see in second image)

 
 */