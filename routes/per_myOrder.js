let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');

router.get('/', function(req, res, next) {
    res.render('per_myOrder',{title:'Express'});
});
router.post('/',function (req,res,next) {
    sql = "select * from management where userName = " + "'" + req.cookies.Name + "'";
    base.query(sql, function (err, resu) {
        res.send(resu);
    });
});
module.exports = router;