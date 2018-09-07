let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
    res.render('org_uploadData',{title:'Express'});
});

module.exports = router;