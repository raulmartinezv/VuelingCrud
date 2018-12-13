const express = require('express');
const path = require('path');
const opn = require ('opn');

const app = express();

app.use(express.static(__dirname + '/dist/VuelingCrud/'));
app.get('/*',function(req,res){
res.sendFile(path.join(__dirname+'/dist/VuelingCrud/index.html'));
});

app.listen(8080, function(){
    console.log('Servidor corriendo en http://localhost:8080');
    opn('http://localhost:8080');
})