let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');


router.get('/', function(req, res, next) {
    res.render('login', { title: '登录' });
});

router.post('/', function(req, res, next) {
    // 1. 获取数据
    //console.log(req);
    let Name = req.body.name;
    let loginPwd = req.body.password;
    res.cookie('Name',Name);
    sql="select sex from userInfo where userName = "+"'"+Name+"'";
    base.query(sql,function (err,resu) {
        if (resu[0] === undefined) {
            sql = "select * from orgInfo where orgName = " + "'" + Name + "'";
            base.query(sql, function (err, rs) {
                if (null === rs[0] || undefined === rs[0]) { // 没有注册
                    res.send("fail2");
                } else if (rs[0].orgPassword === loginPwd) {
                    res.send("orga");
                } else {
                    res.send("fail");
                }
            });
        } else {
            sql = "select password from userInfo where userName = " + "'" + Name + "'";
            base.query(sql, function (err, rs) {
                if (null === rs[0] || undefined === rs[0]) { // 没有注册
                    res.send("fail2");
                } else if (rs[0].password === loginPwd) {
                    res.send("user")
                } else {
                    res.send("fail");
                }
            });
        }
    });
});

module.exports = router;
