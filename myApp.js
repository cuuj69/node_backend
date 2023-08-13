let express = require('express');
let app = express();
let bodyParser = require('body-parser')
require('dotenv').config()


//log Hello World to the console
//console.log("Hello World");

//send Hello Express to the node server
//app.get('/',((req,res)=>{
//	res.send("Hello Express")

//}))


//bodyparser-middleware
app.use(bodyParser.urlencoded({extended:false}))


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


//app.get('/now',((req,res,next)=>{
//   req.time = new Date().toString();
//   console.log(req.time)
 //  next();
//},(req,res)=>{
//  res.json({time:req.time})
//}))


//middleware timeserver
app.get('/now',function(req,res,next){
req.time = new Date().toString()
	next()
},function(req,res){
res.json({time:req.time})

})

//echo server

app.get('/:word/echo', ((req,res)=>{
   word  = req.params.word
	res.json({echo:word})
}))


//getting query params

app.route('/name').post((req,res)=>{
	let bothnames = `${req.body.first} ${req.body.last}`
	res.json({name: bothnames})
}).get((req,res)=>{
    const fullname = `${req.query.first} ${req.query.last}`
	res.json({"name":fullname})
})


// 

















 module.exports = app;
