let util = require('./query.js');


function isReg(sql) {
    util.query(sql, function (err, rs) {
        return rs
    })
}
exports.isReg=isReg;