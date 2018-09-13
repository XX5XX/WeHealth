let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');

router.get('/', function(req, res, next) {
    if(req.cookies.Name!==undefined) {
        res.render('per_hcStore', {title: 'Express'});
    }else res.send("请先登录")
});
router.post('/',function(req,res,next){
    sql = "select userHc from userInfo where userName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
        console.log(resu[0].userHc > req.body.price);
        if(resu[0].userHc>req.body.price){
            //记录用户的订单，保存在数据库中
            var mydate=new Date();
           mydate.toLocaleDateString();
            sql = "insert into management(userName,goodsName,goodsAmount,payHc,payTime,orgName,state) values("+"'"+req.cookies.Name+"',"+"'"+req.body.service+"',"+"'"+"1"+"',"+"'"+req.body.price+"',"+"'"+mydate.toLocaleDateString()+"',"+"'"+"第二人民医院"+"',"+"'"+"已完成"+"')";
            base.query(sql, function (err, resu) {
                sql2="select userHc from userinfo where userName= "+"'"+req.cookies.Name+"'";
                base.query(sql2,function (err,resu2) {
                    resu2[0].userHc-=req.body.price;
                    sql3="update userinfo set userHc = "+resu2[0].userHc+" where userName="+"'"+req.cookies.Name+"'";
                    base.query(sql3,function (err,resu4) {
                        res.send(true);
                    })
                });
            });
        }else res.send(false)
    });
});
module.exports = router;