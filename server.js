var express=require('express');
var app=express();
app.use(express.static(__dirname + '/public'));

app.listen(8000, function() {
  console.log("Probando servidor, hola Pili y Nanys <3")
});
