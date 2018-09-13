var Contract = require('./chain.js');
var hccon = new Contract().getcontract("0x7f5604767275a24681aa9eb53ea6c054ea868efe","123","0xbfa9c42c9d68a5e7e950017c3e25a5338bb60c16");
var hcUser = require('./hcUser.js');
var user = new hcUser();

function hcMethods() {
    
    //用户健康状态发送
    this.sendMsg = function (_from, _heart, _blood, _sleep) {
        hcMethods().hctransfer("0x7f5604767275a24681aa9eb53ea6c054ea868efe",_from,"1");
    }

    //转账
    this.hctransfer = function (_from, _to, _value) {
        hccon.methods.transfer(_from,_to,_value).send({
            from: _from,
            gasPrice: '200000000000',
            gas: 150000000
        }, function(error, res){
            if(!error) {
                console.log(res);
            } else {
                console.log(error);
            }
        });
    }
    
}

module.exports = hcMethods;

    // var keythereum = require('E:/learn/nodejs/node_global/node_modules/keythereum');
    //
    // var datadir = "E:\\Geth\\chain";
    // var address= "0xc505f65753600969f58b4162b2b23092a2a04eb0";
    // var fromkey = keythereum.importFromFile(address, datadir);
    //
    // //recover输出为buffer类型的私钥
    // const password = "123456789";
    // var privateKey = keythereum.recover(password, fromkey);
    // console.log(privateKey.toString('hex'));
    //
    // web3.eth.getCoinbase().then(console.log);
// }