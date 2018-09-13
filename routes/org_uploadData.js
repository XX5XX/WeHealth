let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');
var angelInterface = require("../web3_interface/angelInterface")
var anI = new angelInterface();
router.get('/', function(req, res, next) {
    if(req.cookies.Name!==undefined) {
        res.render('org_uploadData', {title: 'Express'});
    }else res.send("请先登录")
});
router.post('/',function(req,res,next){
        sql = "insert into usertrans(userName,sex,birthday,height,weight,heartRate,bloodPressure,sleepQuality,counts,remark) values("+"'"+req.body.name+"',"+"'"+req.body.sex+"',"+"'"+req.body.birth+"',"+"'"+req.body.height+"',"+"'"+req.body.weight+"',"+"'"+req.body.hr+"',"+"'"+req.body.bp+"',"+"'"+req.body.sq+"','0', '"+req.body.remark+"')";
        //上传完更新机构的上传数据数量。
        //anI.getUserTransaction("zyh","")
        base.query(sql, function (err, resu) {
            sql2="select * from orginfo where orgName = "+"'"+req.cookies.Name+"'";
            base.query(sql2,function (err,resu2) {
                console.log(resu2);
                resu2[0].uploadAmount+=1;
                resu2[0].orgHc+=10;
                sql3="update orginfo set uploadAmount ="+resu2[0].uploadAmount+" where orgName = "+"'"+req.cookies.Name+"'";
                sql4="update orginfo set orgHc ="+resu2[0].orgHc+" where orgName = "+"'"+req.cookies.Name+"'";
                base.query(sql3,function (err,resu3) {
                    base.query(sql4,function (err,resu4) {
                        res.render('org_uploadData');
                    })
                })
            });
        });
});
module.exports = router;