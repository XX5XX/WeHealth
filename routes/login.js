let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');
let window = require('window');

router.get('/', function(req, res, next) {
    res.render('login', { title: '登录' });
});

router.post('/', function(req, res, next) {
    // 1. 获取数据
    //console.log(req);
    let Name = req.body.name;
    let loginPwd = req.body.password;
    res.cookie('Name',Name);
    sql="select sex from useInfo where username = "+"'"+Name+"'";
    base.query(sql,function (err,resu) {
        if (resu === undefined) {
            sql = "select password from orga where organame = " + "'" + Name + "'";
            base.query(sql, function (err, rs) {
                if (null === rs || undefined === rs) { // 没有注册
                    res.send("fail2");
                } else if (rs.password === loginPwd) {
                    res.send("orga");
                } else {
                    res.send("fail");
                }
            });
        } else {
            sql = "select password from useInfo where username = " + "'" + Name + "'";
            base.query(sql, function (err, rs) {
                if (null === rs || undefined === rs) { // 没有注册
                    res.send("fail2");
                } else if (rs.password === loginPwd) {
                    res.send("user")
                } else {
                    res.send("fail");
                }
            });
        }
    });
});

module.exports = router;
