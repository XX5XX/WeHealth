let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');
var angelInterface = require("../web3_interface/angelInterface")
var anI = new angelInterface();


router.get('/', function(req, res, next) {
    if(req.cookies.Name!==undefined) {
        res.render('per_personalInfo', {title: 'Express'});
    }else res.send("请先登录")
});
router.post('/',function (req,res,next) {
    sql = "select * from userInfo where userName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
        //調用ajax請求的數據;
       /* anI.getUserBalance(req.cookies.Name,function(res){
            console.log(res);
        });*/
        res.send(resu[0]);
    });
});
module.exports = router;