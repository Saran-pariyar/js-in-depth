/**
 BROWSER WEB APIs:
 1. setTimeout()
 2. DOM APIs (Eg: document.all)
 3. fetch()
 4. Local Storage
 5. console 
 6. Location (Eg: http://www.)

 All things above are not javascript. Even 'document.**' or 'console.**' is not js. 
 Browser give those web api we can use with js through window object(global object). (See img)
 */

 /**
Event loop & Callback queue

If we create setTimeOut, the callback function is registered in JS runtime env and the timer is running.

After the time expires, it puts that function into CallBack Queue.

Now the Event loop will check the callback function in CallBack Queue and put it into call stack where it will be executed

Event loop acts like a gatekeeper. It's only work is to continuously monitor Call stack and event queue so executed the callback function one by one. It check first if the call stack is empty and then execute the callback function
  
  */