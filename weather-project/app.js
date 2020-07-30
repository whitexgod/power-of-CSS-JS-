const express = require('express');
const https = require('https');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  const query = req.body.CityName;
  const apikey = "ef5bfe2d838fa7d9aa0646bde38430c4";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on('data', function(data){
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const weatherdescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgurl = "https://openweathermap.org/img/wn/" + icon + "@4x.png";
      res.write("<h1>The temperature in "+req.body.CityName+" is "+ temp +" degrees Celcius.</h1>");
      res.write("<p>The weather is currently " + weatherdescription +"</p>");
      res.write("<img src="+imgurl+">");
      res.send()
    });
  });
});



app.listen(3000, function(){
  console.log("Server is running at port 3000");
});
