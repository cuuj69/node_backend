let express = require('express');
let app = express();


//log Hello World to the console
//console.log("Hello World");

//send Hello Express to the node server
//app.get('/',((req,res)=>{
//	res.send("Hello Express")

//}))


//send HTML file

app.get('/',((req,res)=>{
	res.sendFile(__dirname + '/views/index.html')

}))































 module.exports = app;
