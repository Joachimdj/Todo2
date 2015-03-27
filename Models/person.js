var db = require("./db");
var mongoose  = require("mongoose");


var person = mongoose.model("person");




function _findAllPersons(callback){
    person.find(function(err,result){
        if(err)
            return callback(err);

        return callback(null,result);

    })

}

_findAllPersons(function(err,data){

    console.log(data);
})

module.exports = {
    findAllPersons : _findAllPersons
}