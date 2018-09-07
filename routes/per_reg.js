let express = require('express');
let router = express.Router({});

let base = require('../dao/db/query');


router.post('/', function(req, res, next) {
    // 1. 获取数据
    console.log(req.body);
    let userName = req.body.Name;
    let loginPwd = req.body.Password[0];
    let sex=req.body.sex;

    // 2. 处理数据
    // 2.1 生成用户注册对象
    console.log(userName);
    console.log(loginPwd);
    console.log(sex);

    // 2.2 验证用户是否已经注册
    sql="select username from useInfo where username = "+"'"+userName+"'";
    base.query(sql,function (err,rs) {
        if(null === rs || undefined === rs){ // 没有注册
            sql="insert into useInfo(username,sex,password) values("+"'"+userName+"',"+"'"+sex+"',"+"'"+loginPwd+"'"+")";
            base.query(sql,function (err,rs) {
                console.log("注册成功");
                res.redirect('/login');
            })
        }else {
            res.send("该用户已经注册过");
        }
    });

    //res.redirect('/login');
});

module.exports = router;
