let util = require('../dao/db/query.js');

let te="zhangyuaho";
sql="select username from useInfo where username = "+"'"+te+"'";
function isReg(sql) {
    util.query(sql, function (err, rs) {
        return rs
    })
}
exports.isReg=isReg;