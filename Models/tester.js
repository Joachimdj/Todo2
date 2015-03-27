var db = require("./db");
var mongoose  = require("mongoose");


var person = mongoose.model("person");

person.find(function(err,result){

   if(err)
       return console.log(err);
    console.log("PERSONS");
    console.log(result);

})


var joke = mongoose.model("todo");

joke.find(function(err,result){

    if(err)
        return console.log(err);
    console.log("JOKES");
    console.log(result);

})

