let util = require('./query.js');


function insertuseInfo(sql) {
    util.query(sql, function (err, rs) {
        console.log("增加成功");
    })
}
exports.insertuseInfo=insertuseInfo;