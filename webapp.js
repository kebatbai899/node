var request = require('request')

function getWeather(location){
    return new Promise(function(resolve, reject){
        var el = encodeURIComponent(location);
        var url=`http://api.openweathermap.org/data/2.5/weather?q=${el}&appid=0285c665a96363c01210b289ba529179&units=imperial`;
        if(!location){
            return reject('no location is found');
        }
        request({
            url: url,
            json: true
        }, function(error, response, body){
            if(error){
                reject('unable to fetch weather');
            }
            else{
                resolve('its '+body.main.temp+' in '+body.name);
            }
        })
    })
}
getWeather('Austin').then(function(currentweather){
    console.log(currentweather)
}, function(error){
    console.log(error)
})