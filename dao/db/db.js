let mysql = require('mysql');
/*let crypto = require('crypto');


console.log(crypto.getHashes());

let content = 'password';//加密的明文；
let md5=crypto.createHash('md5');//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
md5.update(content);
console.log(content);
let d= md5.digest('hex');
console.log(d);*/

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Zyhojbk..',
    database : 'x5x'
});

connection.connect();
//查询数据：
module.exports=connection;
