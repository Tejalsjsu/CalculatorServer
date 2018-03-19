var express = require('express');
var router = express.Router();


var users = [
    {
        username: "Mike",
        password: "mike123"
    },
    {
        username: "Tom",
        password: "tom123"
    },
    {
        username: "John",
        password: "john123"
    },
    {
        username: "Mac",
        password: "mac123"
    }
];

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});



router.post('/doLogin', function (req, res, next) {

    var reqUsername = req.body.username;
    var reqPassword = req.body.password;

    // Just checking if the username is in our user's array
    var theUser = users.filter(function(user){
        return user.username === reqUsername;
    });

    // Check the password
    if(theUser.length === 1){
        theUser[0].password === reqPassword &&
        res.status(201).json({message: "Login successful"}) ||
        res.status(401).json({message: "Login failed"});
    } else {
        res.status(401).json({message: "Login failed"});
    }


    // if(theUser.password === reqPassword){
    //     res.status(201).json({message: "Login successful"});
    // } else {
    //     res.status(401).json({message: "Login failed"});
    // }

});

//
// router.post('/doCal', function(req, res, next){
//     res.status(201).json({message: "Login failed"});
// });

router.post('/doAdd', function (req, res, next) {
    var Number1 = req.body.no1;
    var Number2 = req.body.no2;

    // Just checking if the username is in our user's array
    var result = parseFloat(Number1) + parseFloat(Number2);

    if(result.length === 1){
        res.status(201).json({message: "Operation successful"});
    } else {
        res.status(401).json({message: "Operation failed"});
    }
});
module.exports = router;
