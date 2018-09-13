let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
    if(req.cookies.Name!==undefined) {
        res.render('per_index', {title: 'Express'});
    }else res.send("请先登录")
});
router.post('/',function (req,res,next) {
        res.send(req.cookies.Name);
});
module.exports = router;