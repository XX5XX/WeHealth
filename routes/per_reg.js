let express = require('express');
let router = express.Router({});
let formidable = require('formidable');
let util = require("util");
let uuidv1 = require('uuid/v1');
let path = require("path");
let fs = require("fs");
let base = require('../dao/db/query');
let utils = require('../web3_interface/utils');

router.post('/', function(req, res, next) {
    // 1. 获取数据
    let form = new formidable.IncomingForm();
    form.uploadDir = "./public";
    // 3. 获取表单的内容
    form.parse(req, (err, fields, files) => {
        // 3.1 生成随机的名称
        let name = uuidv1();
        // 3.2 获取上传文件的后缀
        let username = fields.Name;
        let loginPwd = fields.Password;
        let sex = fields.sex;
        let birthday = fields.birth;
        //新建一个账号（区块链中）
        let extName = path.extname(files.perphoto.name);
        // 3.3 设置路径
        let dirname = "D:/DAPP/WeHealth";
        let oldPath = dirname + "/" + files.perphoto.path;
        let newPath = dirname + "/public/per_photo/" + name + extName;
        let photopath = "per_photo" + "/" + name + extName;
        // 3.4 改名
        fs.rename(oldPath, newPath, (err) => {
            if (!err) {
                sql = "select userName from userInfo where userName = " + "'" + username + "'";
                base.query(sql, function (err, rs) {
                    if (null === rs[0] || undefined === rs[0]) { // 没有注册
                        utils.web3.eth.personal.newAccount(loginPwd).then(function (add) {
                            sql = "insert into userInfo(userName,password,sex,birthday,photopath,userHc,address) values(" + "'" + username + "'," + "'" + loginPwd + "'," + "'" + sex + "'," + "'" + birthday + "'," + "'" + photopath + "'," + "0," + "'" + add + "')";
                            base.query(sql, function (err, rs) {
                                console.log("注册成功");
                            });
                            res.redirect('/login');
                        })
                    } else {
                        res.send("fail");
                    }
                })
            } else {
                throw  err;
            }
        });

    })//res.redirect('/login');
});

module.exports = router;
