let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
    if(req.cookies.Name!==undefined) {
        res.render('org_hcStore', {title: 'Express'});
    }else res.send("请先登录")
});

module.exports = router;