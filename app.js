var express = require('express');
var app =express();
var createDB = function(){
  
};
var start = function(){
  app.listen(3000);
  app.on('disconnect')
};
