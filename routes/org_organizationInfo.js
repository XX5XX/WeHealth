let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');

router.get('/', function(req, res, next) {
    res.render('org_organizationInfo',{title:'Express'});
});
router.post('/',function (req,res,next) {
    sql = "select * from orgInfo where orgName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
        //調用ajax請求的數據;
        res.send(resu[0]);
    });
});
module.exports = router;