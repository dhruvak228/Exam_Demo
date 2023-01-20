const express=require('express');
var app=express();
const path= require('path');
const fs=require('fs');


app.use(express.static(path.join(__dirname+'public')));

app.get('/',function (req,resp) {
    resp.sendFile(path.join(__dirname+'/public/index.html'));
    
});

app.get('/get_data',function (req,resp) {
    console.log("calling rest api");
    var person={Firstname:"Dhruva",Lastname:"Kumar",age:25,adress:"sector 17a Gurugram"};
    resp.send(person);
});

var server=app.listen(5500,function () {
    var host=server.address().address
    var port=server.address().port
    console.log("server is listening on port 5500");
});