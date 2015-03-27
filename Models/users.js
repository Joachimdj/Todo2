

var users = [
    {userName: "Peter", password : "secret"}, {userName: "Lars", password : "test"}
];


function findUsers(userName,password)
{

    var found = users.filter(function(user){

    return user.userName === userName && user.password === password; })

    return found.length === 1 ? true : false; }


module.exports = {
    findUsers : findUsers
}