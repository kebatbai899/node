var request = require('request');


module.exports = function(location,callback){
    return new Promise(function(resolve, reject){
        var el=encodeURIComponent(location)
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${el}&appid=0285c665a96363c01210b289ba529179&units=imperial`;
    request({
        url: url,
        json: true
    }, function (error, response, body){
            if(error){
                reject('Unable to fetch weather.');

            }else{
                resolve(body);
            }
        })
    }) 
}