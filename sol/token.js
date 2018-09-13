
function getToken(){

    var contractAddress="0x61c8a06200f372127f99c159ec62243eb96ab80f";

    var contractABI = [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "buyPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "frozenAccount",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "sellPrice",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "initialSupply",
                    "type": "uint256"
                },
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_symbol",
                    "type": "string"
                },
                {
                    "name": "_decimals",
                    "type": "uint8"
                },
                {
                    "name": "centralMinter",
                    "type": "address"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "buy",
            "outputs": [
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "sell",
            "outputs": [
                {
                    "name": "revenue",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwner",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_from",
                    "type": "address"
                },
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "target",
                    "type": "address"
                },
                {
                    "name": "_bool",
                    "type": "bool"
                }
            ],
            "name": "freezeAccount",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "fallback"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newSellPrice",
                    "type": "uint256"
                },
                {
                    "name": "newBuyPrice",
                    "type": "uint256"
                }
            ],
            "name": "setPrice",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_add",
                    "type": "address"
                }
            ],
            "name": "getcoin",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "add",
                    "type": "address"
                }
            ],
            "name": "kill",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "target",
                    "type": "address"
                },
                {
                    "name": "mintedAmount",
                    "type": "uint256"
                }
            ],
            "name": "mintToken",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]

    // 获取合约实例
    var contract = web3.eth.contract(contractABI).at(contractAddress);

    return contract;
}

// var contractAddress="0x61c8a06200f372127f99c159ec62243eb96ab80f";
//
// var contractABI = [
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "name": "balanceOf",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "buyPrice",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "decimals",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint8"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "totalSupply",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "symbol",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [
//             {
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "name": "frozenAccount",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "sellPrice",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "owner",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "name",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "name": "initialSupply",
//                 "type": "uint256"
//             },
//             {
//                 "name": "_name",
//                 "type": "string"
//             },
//             {
//                 "name": "_symbol",
//                 "type": "string"
//             },
//             {
//                 "name": "_decimals",
//                 "type": "uint8"
//             },
//             {
//                 "name": "centralMinter",
//                 "type": "address"
//             }
//         ],
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "constructor"
//     },
//     {
//         "constant": false,
//         "inputs": [],
//         "name": "buy",
//         "outputs": [
//             {
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "amount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "sell",
//         "outputs": [
//             {
//                 "name": "revenue",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "newOwner",
//                 "type": "address"
//             }
//         ],
//         "name": "transferOwner",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_from",
//                 "type": "address"
//             },
//             {
//                 "name": "_to",
//                 "type": "address"
//             },
//             {
//                 "name": "_value",
//                 "type": "uint256"
//             }
//         ],
//         "name": "transfer",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [],
//         "name": "deposit",
//         "outputs": [],
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "target",
//                 "type": "address"
//             },
//             {
//                 "name": "_bool",
//                 "type": "bool"
//             }
//         ],
//         "name": "freezeAccount",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "fallback"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "newSellPrice",
//                 "type": "uint256"
//             },
//             {
//                 "name": "newBuyPrice",
//                 "type": "uint256"
//             }
//         ],
//         "name": "setPrice",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "_add",
//                 "type": "address"
//             }
//         ],
//         "name": "getcoin",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "add",
//                 "type": "address"
//             }
//         ],
//         "name": "kill",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "target",
//                 "type": "address"
//             },
//             {
//                 "name": "mintedAmount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "mintToken",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     }
// ]
//
// // 获取合约实例
// var contract = web3.eth.contract(contractABI).at(contractAddress);
// }
