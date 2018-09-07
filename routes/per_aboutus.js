let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
    res.render('per_aboutus',{title:'Express'});
});

module.exports = router;