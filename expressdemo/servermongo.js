const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://admin:Hanhphuc4$@my-cluster-cepzw.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "my-cluster";
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;

app.set("view engine", "ejs")
app.set("views", __dirname +"/views")
app.set("view options", {layout:false})
// app.get('/', function(req, res){
//     res.render('mongoinsert')
// })
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:true}))

app.post("/person", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});
app.get("/people", (request, response)=>{
    collection.find({}).toArray((error, result)=>{
        if(error){
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
app.get("/", (request, response)=>{
    collection.find({}).toArray((error, result)=>{
        if(error){
            return response.status(500).send(error);
        }
        response.render('mongoinsert.ejs', {data:result});
    });
});

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("people");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});