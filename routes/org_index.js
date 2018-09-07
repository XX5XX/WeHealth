let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
    res.render('org_index',{title:'Express'});
});

module.exports = router;