let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
    res.render('per_myOrder',{title:'Express'});
});

module.exports = router;