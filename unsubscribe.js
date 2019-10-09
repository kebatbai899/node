var EventEmitter = require('events').EventEmitter
var emitter = new EventEmitter();



emitter.once('foo', function(){
    console.log('called1')
});
emitter.once('foo', function(){
    console.log('called2')
});
//Emit twice
emitter.emit('foo');
emitter.emit('foo');