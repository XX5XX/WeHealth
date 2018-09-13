// //连接测试
// var Contract = require('./chain.js');
// var hccon = new Contract().getcontract("0xc505f65753600969f58b4162b2b23092a2a04eb0","123456789","0x6ccfcbd2201c6439362b93de99bc014a6c16e09e");
//
// hccon.methods.name().call({from: hccon.currentAccount}, function(error, result) {
//     if (!error) {
//         console.log(result);
//     } else {
//         console.log(error);
//     }
// });

var hcMethods = require('./hc.js');
var hc = new hcMethods();

// hc.etherBuyhc("0x4f00bf6addda320627803dd8c0441ee898219a22","123456789","10");
// hc.sendMsg("0x4f00bf6addda320627803dd8c0441ee898219a22","123","10","50");
// console.log(a);
hc.hctransfer("0x7f5604767275a24681aa9eb53ea6c054ea868efe","0x4b19c31c74019166699f9a04ae8e36dc934f62fb",'100');

