let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
    res.render('per_personalInfo',{title:'Express'});
});
router.post('/',function (req,res,next) {
    //console.log(req.cookies.Name);
    console.log(req.cookies.Name);
    res.send(req.cookies.Name)
});
module.exports = router;