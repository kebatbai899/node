var middleware = {
    requireAuth: function (req, res, next){
        console.log('private route hit!')
        next()
    },
    logger:function(req, res, next){
        console.log('request'+new Date().toString()+ req.method+' '+req.originalURL)
        next()
    } 
}

module.exports = middleware