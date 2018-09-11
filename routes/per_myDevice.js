let express = require('express');
let router = express.Router({});
var judge = require('./login.js');

router.get('/', function(req, res, next) {
    if(req.cookies.Name!==null&&req.cookies.Name!==undefined)
        res.render('per_myDevice', {title: 'Express'});
    else res.send("访问无效,请先登录区块链大健康平台");
});

module.exports = router;