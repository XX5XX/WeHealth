let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
    res.render('org_hcStore',{title:'Express'});
});

module.exports = router;