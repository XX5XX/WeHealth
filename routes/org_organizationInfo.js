let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');

router.get('/', function(req, res, next) {
    if(req.cookies.Name!==undefined) {
        res.render('org_organizationInfo', {title: 'Express'});
    }else res.send("请先登录")
});
router.post('/',function (req,res,next) {
    sql = "select * from orgInfo where orgName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
        //調用ajax請求的數據;
        res.send(resu[0]);
    });
});
module.exports = router;