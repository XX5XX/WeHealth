let express = require('express');
let router = express.Router({});


router.get('/', function(req, res, next) {
   res.render('per_index',{name:"zhangyuhao"});
});
router.post('/',function (req,res,next) {
        res.send(req.cookies.Name);
});
module.exports = router;