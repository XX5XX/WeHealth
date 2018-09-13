let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');
let angelInterface = require("../web3_interface/angelInterface")
let anI = new angelInterface();
let hc=require('../sol/hc');
let hcm=new hc();
router.post('/',function (req,res,next) {
    sql1 = "select * from userinfo where userName= "+"'"+req.body.name+"'";
    base.query(sql1, function (err, resu1) {
        sql2 = "insert into usertrans(userName,sex,birthday,height,weight,heartRate,bloodPressure,sleepQuality,counts,remark) values("+"'"+req.body.name+"',"+"'"+resu1[0].sex+"',"+"'"+resu1[0].birthday+"',"+"'"+resu1[0].height+"',"+"'"+resu1[0].weight+"',"+"'"+req.body.heartRate+"',"+"'"+req.body.bloodPressure+"',"+"'"+req.body.sleepQuality+"','0', '"+"个人"+"')";
        base.query(sql2, function (err, resu2) {
            sql3="select userHc from userinfo where userName= "+"'"+req.body.name+"'";
            base.query(sql3,function (err,resu3) {
                sql5="select address from userinfo where userName= "+"'"+req.body.name+"'";
                base.query(sql5,function (err,resu5) {
                    //add+=resu5[0].address;
                    //add+="'";
                    console.log(resu5[0].address);
                    hcm.hctransfer('0x7f5604767275a24681aa9eb53ea6c054ea868efe',resu5[0].address,'30');
                    resu3[0].userHc+=30;
                    sql4="update userinfo set userHc = "+resu3[0].userHc+" where userName="+"'"+req.body.name+"'";
                    base.query(sql4,function (err,resu4) {
                        res.send(true);
                    })
                })
            });
            })
        });
});
module.exports = router;