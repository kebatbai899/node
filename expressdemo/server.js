var express = require('express')
var app= express();
var bp = require('body-parser')
var _ = require('underscore')
var middleware = require('./middleware')


app.use(middleware.logger)
// app.use(express.static('public'))
app.set("view engine", "ejs")
app.set("views", __dirname +"/views")
app.set("view options", {layout:false})
app.get('/', function(req, res){
    res.render('index')
})

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
var uid = 1
var userdata = [
    // {taskname: "purchase vegis", completed: true},
    // {taskname: "play games", completed: false},
    // {taskname: "feed the cat", completed: false}
]
app.post('/posttasks', function(req, res){
    var data = req.body
    console.log(data)
    data.id=uid++
    userdata.push(data);
    res.send('data is added')
})
app.get('/loadtasks', function(req, res){
    res.json(userdata)
})
app.get('/loadtasks/:id', (req, res)=>{
    var todoid = parseInt(req.params.id)
    var mct = _.findWhere(userdata,{id:todoid})
    // userdata.forEach(function(todo){
    //     if(todoid==todo.id){
    //         mct=todo
    //     }
    // })
    if(mct){
        res.json(mct)
    }else{
        res.status(404).send()
    }
})
app.delete('/deletedata/:id',(req, res)=>{
    var todoid=parseInt(req.params.id)
    var mct = _.findWhere(userdata, {id:todoid})
    if(!mct){
        res.status(404).send()
    }else{
        userdata = _.without(userdata, mct)
        res.json(mct)
    }
})
app.put('/updatedata/:id',(req, res)=>{
    var todoid=parseInt(req.params.id)
    var mct = _.findWhere(userdata, {id:todoid})
    var body = _.pick(req.body, 'taskname', 'completed')
    var va = {}

    if(!mct){
        res.status(404).send()
    }else{
        va.taskname=body.taskname
        va.completed=body.completed
        _.extend(mct,va)
        res.json(mct)
    }
})


app.listen(4000, function(){
    console.log('server is ready')
})