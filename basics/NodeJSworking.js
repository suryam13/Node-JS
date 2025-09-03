import fs from 'fs'  //1st - imports get resolved 



setTimeout(()=>{   // sent to the libUV 
    console.log('hello from setTimeout 1')
},0)
// The callback is registered immediately on the fly and sent to libuv timers phase with a 0ms delay.
// This means: “run this after the current call stack and microtasks finish.”

// setImmediate is not avaialble in browsers
setImmediate(()=>{
    console.log('hello from setImmediate 1')
})



console.log('hello from top level code') // 2nd - top level code executes

