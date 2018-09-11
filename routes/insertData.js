let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');


router.post('/',function (req,res,next) {
    sql = "select * from usertrans where userName= "+"'"+req.body.name+"'";
    base.query(sql, function (err, resu) {
        sql = "insert into usertrans(userName,sex,birthday,height,weight,heartRate,bloodPressure,sleepQuality,counts) values("+"'"+req.body.name+"',"+"'"+resu[0].sex+"',"+"'"+resu[0].birthday+"',"+"'"+resu[0].height+"',"+"'"+resu[0].weight+"',"+"'"+req.body.heartRate+"',"+"'"+req.body.bloodPressure+"',"+"'"+req.body.sleepQuality+"','0')";
        base.query(sql, function (err, resu) {
            res.send(true)
        });
    });
});
module.exports = router;