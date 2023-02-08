const express = require('express');
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}))

app.get("/bmicalc",function(req,res){
    res.sendFile(__dirname+'/bmicalc.html')
})

app.post('/bmicalc',function(req,res){
    var num1=Number(req.body.w);
    var num2=Number(req.body.h);

    var result= num1/(num2*num2); 
    res.send("the BMI result is "+ result);
})

app.listen(3000,function(){
    console.log("listening at port 3000")
})
