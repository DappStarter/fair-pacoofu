require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot alcohol random sad under inside light army gentle'; 
let testAccounts = [
"0xb52e1b2d9a9b12dd4182c398c9a9c483ac79c4d8bd7b0e6911d6a74f378b2bc6",
"0x7b0f0bf4f4d83d4f5cee80ea3fa22edcd72d43d4c253393aa0b715ab4535545b",
"0x5c38ef15ebdf3078a178f77cb8c03fe06b199bbcb5057f02bdbe35bc6fc3bda9",
"0x7b36ae126102cb7258aebb82739d81d01f1fea1dd4f0775bbc1d7473032e1ba2",
"0xc30f3a08f2caeaa277fa5fb81c28ffc5c54b78980c5d21de0fba0f04694bd4dd",
"0xf8aaa4f7ae6a771fc0c4648a47e227cc5f386fe28aecc5ff4005dc68f98afb4a",
"0x5f9be1582eb3c48d495506d27d64d04f7f015624be4ffc9b1b6bc05cb1ece2bd",
"0x9f9b221ae98e8b53ce68b4551114117931d51188ff9d5b50ae6716adabeca11e",
"0x1c8dc61b99923e50b66f7ca4d86495f8c60703d4c107bafc4d59a465c123adce",
"0x118ff3520cd8b0a2895fb256628cdccf64bc24af2272b5e192a8cf554d4d954d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
