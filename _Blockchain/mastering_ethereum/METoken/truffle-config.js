// Install dependencies:
// npm init
// npm install --save-dev dotenv truffle-wallet-provider ethereumjs-wallet

// Create .env in project root, with keys:
// ROPSTEN_PRIVATE_KEY="123abc"
// MAINNET_PRIVATE_KEY="123abc"

require('dotenv').config();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');
const Utils = require('web3-utils');

var mainNetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], "hex")
var mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
var mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");

var ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/");

module.exports = {
  networks: {
		dev: { // Whatever network our local node connects to
			network_id: "*", // Match any network id
			host: "localhost",
			port: 8545,
		},
		mainnet: {  // Provided by Infura, load keys in .env file
			network_id: "1",
			provider: mainNetProvider,
			gas: 4600000,
			gasPrice: Utils.toWei("20", "gwei"),
		},
		ropsten: { // Provided by Infura, load keys in .env file
			network_id: "3",
			provider: ropstenProvider,
			gas: 4600000,
			gasPrice: Utils.toWei("20", "gwei"),
		},
		kovan: {
			network_id: 42,
			host: "localhost", // parity --chain=kovan
			port: 8545,
			gas: 5000000
		},
		ganache: { // Ganache local test RPC blockchain
			network_id: "*",
			host: "localhost",
			port: 8545,
			gas: 6721975,
		}
	}
};