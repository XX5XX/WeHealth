let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');

router.get('/', function(req, res, next) {
    res.render('per_hcStore',{title:'Express'});
});
/*router.post('/',function(req,res,next){
    sql = "select userHc from userInfo where userName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
        console.log(resu[0].userHc > req.body.price);
        if(resu[0].userHc>req.body.price){
            //记录用户的订单，保存在数据库中
        res.send("yes");}
        else res.send("no")
    });
});*/
module.exports = router;