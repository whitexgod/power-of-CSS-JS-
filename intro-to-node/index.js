const fs = require("fs");

fs.copyFileSync('file1.txt', 'file2.txt');


var superheroes = require('superheroes');

var mysuperheroname = superheroes.random();

// console.log(mysuperheroname);

var villains = require('supervillains');
var mysupervillain = villains.random();
console.log(mysupervillain);
