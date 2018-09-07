let connection = require("./db.js");
let sql="SELECT username from useInfo where username =";
let OptPool = require('./OptPool');
let optPool = new OptPool();
let pool =  optPool.getPool();

function query(sql,callback){
    pool.getConnection(function (err, conn) {
        conn.query(sql, function (err, rs) {
            if (err) {
                throw err;
            }else callback(err,rs[0]);
            conn.release();
        })
    });
}
exports.query=query;