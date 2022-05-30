require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food play release noble modify gown light army gauge'; 
let testAccounts = [
"0x520cdfa88a6f4f3fd43010097cc5fb17e9d11d9428a01b4952f5035338ff9e60",
"0x034a19328c959c37091cc742d8bc8d125c4b51e4f77a74020cb8621fac82c07d",
"0xde271fa85236f78508720d3d8f9acf278c3da98a076f7c59776201220bbee327",
"0xd6640a46162e9c7cb9f3e631c4b348a59dac7dc29bb21d51ab3bf4d774b1338a",
"0xf4b0a4cc4dfbca6b3b06f9fd3e84ddbe421a332e6f8fe81ba1ae2847f64b5234",
"0xa9cbd8a4ceac0d3b0c547330b5b11b5980e794e2a189704d5488017ed9f743b6",
"0x2126189d31694ee84525d5570f6b3873c1152b0d5f056c94765d5617b8701878",
"0xa3dfa31b9a0f56ee879278b82faf608abcebac38231db814257caa33c944028f",
"0x95a5fe36733ac8d62e28fcafe2f9aedfe7536e451971e7b6689440058605a559",
"0x907d1737811b11f3ce2e7cfb322cb781086d9495d8a50db00f17133926d1e2c3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

