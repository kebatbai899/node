var em = require('events').EventEmitter;

var emitter = new em();

emitter.on('onswipe', function(ev){
    console.log('fan is on', ev)
    ev.handled=true;
})

emitter.on('onswipe', function(ev){
    if(ev.handled){
        console.log('its already switched on', ev)
    } 
})

emitter.emit('onswipe', {handled:false})
console.log("***************")
//emitter.emit('onshoot')