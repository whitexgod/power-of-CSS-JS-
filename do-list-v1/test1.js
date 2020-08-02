const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){

  var today = new Date();
  var currentday = today.getDay();
  var day ="";

  switch (currentday){
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Satarday";
    break;
    default:
    console.log("Error : current day is equal to "+currentday);
  }

  res.render('list', {day: day});
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running at port 300")
});
