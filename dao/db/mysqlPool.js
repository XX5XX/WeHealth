let OptPool = require('./OptPool');
let optPool = new OptPool();
let pool =  optPool.getPool();


//从连接池拿一个连接
pool.getConnection(function (err,conn) {
    let userAddsql='insert into userInfo (username,weight) values(?,?)';
    let param = ['eee','48'];
    conn.query(userAddsql,param,function (err,rs) {
        if(err){
            throw err;
        }
        console.log('insert success');
        //conn.release();   //放回连接池
    });
    //查询
    conn.query('select * from userInfo',function (err,rs) {
        if(err){
            throw err;
        }
        for(var i=0;i<rs.length;i++){
            console.log(rs[i].username);
        }
        conn.release();
    })
});