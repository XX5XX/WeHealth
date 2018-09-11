let express = require('express');
let router = express.Router({});
let base = require('../dao/db/query');
let formidable = require('formidable');
let util = require("util");
let uuidv1 = require('uuid/v1');
let path = require("path");
let fs = require("fs");


router.post('/', function(req, res, next) {

    let form = new formidable.IncomingForm();
    form.uploadDir = "./uploads";
    // 3. 获取表单的内容
    form.parse(req, (err, fields, files) =>{
        // 3.1 生成随机的名称
        let name = uuidv1();
        // 3.2 获取上传文件的后缀
        console.log(fields);
        let orgaName = fields.Name;
        let loginPwd = fields.Password;
        //let sex=req.fields.sex;

        let extName = path.extname(files.certification.name);
        let extName2=path.extname(files.orgphoto.name);
        // 3.3 设置路径
        let dirname="D:/DAPP/WeHealth";
        let oldPath = dirname + "/" + files.certification.path;
        let newPath = dirname + "/uploads/" + name + extName;
        console.log(oldPath);
        console.log(newPath);
        // 3.4 改名
        let oldphoto=dirname+"/"+files.orgphoto.path;
        let newphoto = dirname + "/public/org_photo/" + name + extName;
        let photopath = "org_photo"+"/"+name+extName;
        fs.rename(oldphoto,newphoto,(err)=>{
            if(!err){
                res.send("2")
            }else {
                throw err;
            }
        });
        fs.rename(oldPath, newPath, (err)=>{
            if(!err){
                sql="select orgName from orgInfo where orgName = "+"'"+orgaName+"'";
                base.query(sql,function (err,rs) {
                    if(null === rs[0] || undefined === rs[0]){ // 没有注册
                        sql="insert into orgInfo(orgName,orgPassword,) values("+"'"+orgaName+"',"+"'"+loginPwd+"',"+"'"+photopath+"',"+")";
                        base.query(sql,function (err,rs) {
                            console.log("注册成功");
                            res.redirect('/login');
                        })
                    }else {
                        res.send("该用户已经注册过");
                    }
                });
            }else {
                throw  err;
            }
        });
    });
    //res.redirect('/login');
});

module.exports = router;