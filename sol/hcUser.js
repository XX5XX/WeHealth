var chain = require('./chain.js');

function hcUser() {
    //创建帐号
    this.newUser = function (mypassword) {
        // 可以直接获得地址和私钥
        var account = chain.web3.eth.personal.newAccount(mypassword).then(function (error, result) {
            if (!error) {
                console.log(result);
            } else {
                console.log(error);
            }
        });
    }

    //解锁帐号
    this.unlock = function (_address, _password) {
        chain.web3.eth.personal.unlockAccount(_address,_password);
        new Promise(resolve => setTimeout(resolve, 2000));
    }

}

module.exports = hcUser;