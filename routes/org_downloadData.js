let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');
let uuidv1 = require('uuid/v1');

router.get('/', function(req, res, next) {
    if(req.cookies.Name!==undefined) {
        res.render('org_downloadData', {title: 'Express'});
    }else res.send("请先登录")
});
router.post('/',function (req,res,next) {
    sql2=" lines terminated by '\r\n'";
    sql4=" into outfile 'd:/DAPP/WeHealth/public/data/";
    let name = uuidv1();
    name+=".txt";
    if(req.body.hr&&req.body.bp&&req.body.sq) {
        sql = "select userName,sex,height,weight,heartRate,bloodPressure,sleepQuality from usertrans where sex = " + "'" + req.body.sex + "' limit ";
    }else if(req.body.hr&&req.body.bp){
        sql = "select userName,sex,height,weight,heartRate,bloodPressure from usertrans where sex = " + "'" + req.body.sex + "' limit "
    }else if(req.body.hr&&req.body.sq){
        sql = "select userName,sex,height,weight,heartRate,sleepQuality  from usertrans where sex = " + "'" + req.body.sex + "' limit "
    }else if(req.body.bp&&req.body.sq){
        sql = "select userName,sex,height,weight,bloodPressure,sleepQuality  from usertrans where sex = " + "'" + req.body.sex + "' limit "
    }else if(req.body.hr){
        sql = "select userName,sex,height,weight,heartRate from usertrans where sex = " + "'" + req.body.sex + "' limit "
    }else if(req.body.bp){
        sql = "select userName,sex,height,weight,bloodPressure from usertrans where sex = " + "'" + req.body.sex + "' limit "
    }else {
        sql = "select userName,sex,height,weight,sleepQuality from usertrans where sex = " + "'" + req.body.sex + "' limit "
    }
    var mydate=new Date();
   // mydate.toLocaleDateString();
    sql6="insert into orgtrans(orgName,orgdate,amount,payCounts) values("+"'"+req.cookies.Name+"',"+"'"+mydate.toLocaleDateString()+"',"+"'"+req.body.amount+"',"+"'"+req.body.amount+"')";
    base.query(sql6,function (err,ress) {

    });
    sql3=sql+req.body.amount+sql4+name+"'"+sql2;
    //下载完后更新机构的下载数据数量
    base.query(sql3, function (err, resu) {
        sql5="select * from orginfo where orgName = "+"'"+req.cookies.Name+"'";
        base.query(sql5,function (err,resu5) {
            resu5[0].downloadAmount+=parseInt(req.body.amount);
            resu5[0].orgHc-=parseInt(req.body.amount);
            sql6="update orginfo set downloadAmount ="+resu5[0].downloadAmount+" where orgName = "+"'"+req.cookies.Name+"'";
            sql7="update orginfo set orgHc ="+resu5[0].orgHc+" where orgName = "+"'"+req.cookies.Name+"'";
            base.query(sql6,function (err,resu3) {
                base.query(sql7,function (err,resu4) {
                    res.send(name);
                })
            })
        });

    });
});
module.exports = router;