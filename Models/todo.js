var db = require("./db");
var mongoose  = require("mongoose");


var todo = mongoose.model("todo");

function _findAllTodos(callback){
    todo.find(function(err,result){
        if(err)
            return callback(err);

        return callback(null,result);


    })

}


_findAllTodos(function(err,data){

    console.log(data);
})

module.exports = {
    findAllTodos : _findAllTodos
}