var path = require('path');
var express = require('express');

var app = express();
var rootPath = path.normalize(__dirname+'/../')
app.use(express.static(rootPath+'/app'));



app.listen(8000, function() {
  console.log('listening...');
});