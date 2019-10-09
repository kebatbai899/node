var weather = require ('./weather.js')
var location = require ('./location.js')
var argv = require('yargs')
.option('location',{
    alias:'l',
    type: 'string'
}).help('help').argv

if(typeof argv.l === 'string' && argv.l.length > 0){
    weather(argv.l).then(function(currentweather){
        console.log("It\'s "+currentweather.main.temp+" in "+ currentweather.name)
    }).catch(function(error){
        console.log(error)
    })
}else{
    location().then(function(loc){
        return weather(loc.city)
    }).then(function(currentweather){
        console.log(currentweather.main.temp)
    }).catch(function(error){
        console.log(error)
    })
}



// location(function(location){
//     weather(location.city, function(callback){
//         console.log(callback);
//     })
// })
