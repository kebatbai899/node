var EventEmitter = require ('events').EventEmitter;
var emitter = new EventEmitter();

var listenersCalled = 0;
emitter.setMaxListeners(100);
function someCallback(){
    //Add a listener
    emitter.on('foo', function(){
        listenersCalled++
    })

    //return from callback
}

for(var i = 0; i<90; i++){
    someCallback();

}
emitter.emit('foo');
console.log('listeners called:', listenersCalled)//20