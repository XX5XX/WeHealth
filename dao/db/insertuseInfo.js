let util = require('./query.js');


function insertuserInfo(sql) {
    util.query(sql, function (err, rs) {
        console.log("增加成功");
    })
}
exports.insertuserInfo=insertuserInfo;