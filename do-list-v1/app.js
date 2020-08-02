const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname+'/date.js');

const app = express();

let items =[];
let workTtems=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){

  let day = date.getDate();

  res.render('list', {listTitle: day, newListItem: items});
});

app.post('/', function(req, res){
  // console.log(req.body);
  let item = req.body.newItem;
  if (req.body.list === 'Work'){
    workTtems.push(item);
    res.redirect('/work');
  }
  else{
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', function(req, res){
  res.render('list', {listTitle:"Work List", newListItem: workTtems});
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running at port 300")
});
