let base = require('../dao/db/query');



sql="select userHc from userinfo where userName= "+"'"+"白镇愁"+"'";
base.query(sql,function (err,resu2) {
    //resu2[0]+=3;
    console.log(resu2[0].userHc);
    sql="update userinfo set userHc = "+resu2+" where userName="+"'"+"白镇愁"+"'";
});