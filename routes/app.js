var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc){
      if (err){
        return res.send('Error!');
      }
      res.render('node', {email: doc.email});
    });
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
      firstName:'Jason',
      lastName:'Post',
      password:'super-secret',
      email: email
    });
    user.save(function(err, result){
      if (err){
        console.log(err);
    }
    });
    res.redirect('/');
});


module.exports = router;
