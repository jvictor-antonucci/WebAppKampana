var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();


router.get('/webservice', secured(), function (req, res, next) {
    res.render('webservice', {
        title: 'WebService page'
    });
});
module.exports = router;