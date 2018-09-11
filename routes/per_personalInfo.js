let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');

router.get('/', function(req, res, next) {
    res.render('per_personalInfo',{title:'Express'});
});
router.post('/',function (req,res,next) {
    sql = "select * from userInfo where userName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
        //調用ajax請求的數據;
        res.send(resu[0]);
    });
});
module.exports = router;