let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
    res.render('inner', { title: '关于我们' });
});
module.exports=router;