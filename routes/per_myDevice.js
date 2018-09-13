let express = require('express');
let router = express.Router({});
var judge = require('./login.js');

router.get('/', function(req, res, next) {
    if(req.cookies.Name!==undefined) {
        res.render('per_myDevice', {title: 'Express'});
    }else res.send("请先登录")
});

module.exports = router;