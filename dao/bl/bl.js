#!/usr/bin/env node

var Web3 = require('../../lib/web3.js');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

 var coinbase = web3.eth.coinbase;
 console.log(coinbase);
 web3.eth.defaultAccount = web3.eth.accounts[0];
 let use=web3.eth.accounts[0];

 //var infoContract = web3.eth.contract([{"constant": true,"inputs": [],"name": "getContent","outputs": [{"name": "","type": "string"}],"payable": false,"stateMutability": "view","type": "function"},{"inputs": [{"name": "_str","type": "string"}],"payable": false,"stateMutability": "nonpayable","type": "constructor"}]);
 //var info = infoContract.at('0x60a429c5b31c528d43ca028faf52aa5dcbb44919');
//
 var balance = web3.eth.getBalance(coinbase);
 console.log(balance.toString(10));
// var co = info.getContent();
// console.log(co);

let userName = require("../../routes/login");
console.log(userName.userName);


var infoContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"add","type":"address"}],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"},{"name":"centralMinter","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newSellPrice","type":"uint256"},{"name":"newBuyPrice","type":"uint256"}],"name":"setPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[{"name":"amount","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sell","outputs":[{"name":"revenue","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_str","type":"string"},{"indexed":false,"name":"_sellPrice","type":"uint256"},{"indexed":false,"name":"_buyPrice","type":"uint256"}],"name":"s","type":"event"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_str","type":"string"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"e","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_str","type":"string"},{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_bool","type":"bool"}],"name":"f","type":"event"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"_bool","type":"bool"}],"name":"freezeAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
var info = infoContract.at('0x2a3c3a1ee5e0cd92ea04b6389c79c525f81ee070');
info.owner();