const express = require('express');

const app=express();

app.get("/",function (req,res) {
    res.send("Shello world")
    
});

app.get('/about',function(req,res){
    res.send("contact me");
})

app.get('/contact',function(req,res){
    res.send('8300475270');
})

app.listen(3000,function(){
    console.log("this server started on port 3000")
}); 