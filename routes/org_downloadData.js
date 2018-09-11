let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');
let uuidv1 = require('uuid/v1');

router.get('/', function(req, res, next) {
    res.render('org_downloadData',{title:'Express'});
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
    sql3=sql+req.body.amount+sql4+name+"'"+sql2;
    console.log(sql3);
    //下载完后更新机构的下载数据数量


    base.query(sql3, function (err, resu) {
        console.log(name);
        res.send(name);
    });
});
module.exports = router;