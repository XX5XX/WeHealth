#!/usr/bin/env node

var Web3 = require('../../lib/web3.js');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.eth.coinbase;
console.log(coinbase);
web3.eth.defaultAccount = web3.eth.accounts[0];

//var infoContract = web3.eth.contract([{"constant": true,"inputs": [],"name": "getContent","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [{"name": "_str","type": "string"}],"payable": false,"stateMutability": "nonpayable","type": "constructor"}]);
//var info = infoContract.at('0x60a429c5b31c528d43ca028faf52aa5dcbb44919');

var balance = web3.eth.getBalance(coinbase);
console.log(balance.toString(10));
//var co = info.getContent();
//console.log(co);
let co = 10;
module.exports=co;