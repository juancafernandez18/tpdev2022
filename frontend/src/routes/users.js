var express = require('express');
var router = express.Router();

var hostApi = process.env.HOST_API || 'localhost';
var portApi = process.env.PORT_API || '4000';

const users_controller = require('../controllers/user_controller')




router.get('/', (req, res) => {

    //NPM INSTALL REQUEST
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': `http://${hostApi}:${portApi}/users/get_all`,
        'headers': {}
    };


    request(options, function(error, response) {
        if (error) throw new Error(error);
        res.render("vista.html", { user: JSON.parse(response.body) })
    });
});


router.post('/insert', users_controller.insert);
router.get('/get_all', users_controller.get_all);


module.exports = router;