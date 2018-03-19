var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/doAdd', function (req, res, next) {
    console.log(req);
    var Number1 = req.body.no1;
    var Number2 = req.body.no2;

    // Just checking if the username is in our user's array
    var result = parseFloat(Number1) + parseFloat(Number2);

        res.json({message: result});

});


router.post('/doSub', function (req, res, next) {
    var Number1 = req.body.no1;
    var Number2 = req.body.no2;

    // Just checking if the username is in our user's array
    var result = parseFloat(Number1) - parseFloat(Number2);

    res.json({message: result});

});


router.post('/doMultiply', function (req, res, next) {
    var Number1 = req.body.no1;
    var Number2 = req.body.no2;

    // Just checking if the username is in our user's array
    var result = parseFloat(Number1) * parseFloat(Number2);
    res.json({message: result});
});


router.post('/doDivide', function (req, res, next) {
    var Number1 = req.body.no1;
    var Number2 = req.body.no2;

    // Just checking if the username is in our user's array
    var result = parseFloat(Number1) / parseFloat(Number2);
    res.json({message: result});
});


module.exports = router;
