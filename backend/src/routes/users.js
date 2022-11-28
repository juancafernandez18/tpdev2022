var express = require('express');
var router = express.Router();

const users_controller = require('../controllers/users_controller')

//router.get('/principal', function(req, res, next) {
//  res.render('vista.html');
//});

router.get('/get_all', users_controller.get_all);

router.post('/insert', users_controller.insert);


module.exports = router;