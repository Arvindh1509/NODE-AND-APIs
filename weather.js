const express = require('express');
const app=express();
const https = require('https');
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}))


app.get('/',function(req,res){

    res.sendFile(__dirname + "/weather.html")
})
app.post('/',function(req,res){
    const city=req.body.cityName
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f5c6f07f1092c4fa36e93ccc261c0c77"
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const temp=weatherData.main.temp;
            const feelslike=weatherData.weather[0].description;
            const Icon=weatherData.weather[0].icon;
           
            res.write("<p>the weather description: " + feelslike +"</p>")
            res.write("<h1> the temp in london is " + temp + " K</h1>")
            // res.write(Icon);
            res.send()
            console.log(feelslike);
            console.log(temp);

    })
 })
})

app.listen(3000,function(){
    console.log("running in 3000");
})