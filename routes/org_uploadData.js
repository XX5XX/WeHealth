let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');

router.get('/', function(req, res, next) {
    res.render('org_uploadData',{title:'Express'});
});
router.post('/',function(req,res,next){
        sql = "insert into usertrans(userName,sex,birthday,height,weight,heartRate,bloodPressure,sleepQuality,counts) values("+"'"+req.body.name+"',"+"'"+req.body.sex+"',"+"'"+req.body.birth+"',"+"'"+req.body.height+"',"+"'"+req.body.weight+"',"+"'"+req.body.hr+"',"+"'"+req.body.bp+"',"+"'"+req.body.sq+"','0')";
        //上传完更新机构的上传数据数量。

        base.query(sql, function (err, resu) {
            res.render('org_uploadData')
        });
});
module.exports = router;