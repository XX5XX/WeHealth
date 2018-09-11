let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');


router.post('/',function (req,res,next) {
    sql = "update userInfo set sex ="+"'"+req.body.sex+"'"+" where userName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
    });
    sql = "update userInfo set birthday ="+"'"+req.body.birth+"'"+" where userName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
    });
    sql = "update userInfo set authorization ="+"'"+req.body.isAuthor+"'"+" where userName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
        res.send(true)
    });
});
module.exports = router;