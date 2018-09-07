let express = require('express');
let router = express.Router({});
var judge = require('./login.js');

router.get('/', function(req, res, next) {
    if(judge.judge ==='1') {
        res.render('per_myDevice', {title: 'Express'});
    }
    else res.send('访问无效，请先登录');
});

module.exports = router;