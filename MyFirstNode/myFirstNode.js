// var circle = require('./circle.js');
// console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
// console.log("The area of a circle is "+circle.area(4));
// console.log("Total "+circle.total(circle.area(4), circle.circumference(4)));
// console.log("The circumfacne of a circle is "+ circle.circumference(4));
// var counter = 0;
// var flag = true;
// //for loop
// var myForLoop = function(){
//   for(let i = 0; i < 5; i++){
//     console.log(i);
//   }
//   console.log("****************************");
// }

// while(flag){
//   console.log(counter++);
//   if(counter==6){
//     flag=false;
//   }
// }

var http = require('http')

http.createServer(function(request, response){
  response.writeHead(200);
  response.write("I'm no body");
  setTimeout(function(){
    response.write("I'm somebody");
    response.end();
  },5000)
}).listen(3000);