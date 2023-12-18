const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    sepolia: {
      provider: () => new HDWalletProvider({
        privateKeys: [keys.DEPLOYER_KEY],
        providerOrUrl: keys.INFURA_SEPOLIA_URL,
               gasPrice: 2500000000,
        networkCheckoutTimeout: 10000,
        timeoutBlocks: 200
      }),
      network_id: "11155111",
    },
  },
  compilers: {
    solc: {
      version: "0.8.13",
    },
  },
};
