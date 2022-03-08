var express = require('express');
const user = require('../model/user');
var router = express.Router();

/* GET users listing. */

//diplay form add page
router.get('/', function(req, res, next) {
  res.render("auth.twig");
});
router.post('/add', function(req, res, next) {
  console.log(req.body);
  var user = new User(
      {
      Login:"Barca",
      Password : "vivabarca"
      }
  ) 
  user.save();

});
router.post('/login', function (req, res, next) {
  var login = req.body.Login;
  var password = req.body.Password;
  user.find(function (err, data) {
    if (err) throw err;
    console.log(data);
  data.forEach(element => {
    if (element.Login == login && element.Password == password) {
      res.redirect('/');
    } else {
      res.redirect('/users')
    }
  });
  });
});

module.exports = router;
