let express = require('express');
let app = express();
require('dotenv').config()

//log Hello World to the console
//console.log("Hello World");

//send Hello Express to the node server
//app.get('/',((req,res)=>{
//	res.send("Hello Express")

//}))


//root level logger


app.use((req,res,next)=>{
	console.log(`${req.method} ${req.path} - ${req.ip}`)
	next()
})

//mount assets on specific route
app.use('/public', express.static(__dirname + '/public'))

// serve html file
app.get('/',((req,res)=>{
	res.sendFile(__dirname + '/views/index.html')

}))


//serving json file
//accessing .env files to effect changes to uri/urls
app.get('/json',((req,res)=>{
	let response = "Hello json"
	if(process.env.MESSAGE_STYLE == 'uppercase'){
		res.json({"message":response.toUpperCase()});
	} else 
	{res.json({"message":response}) }
}))






























 module.exports = app;
