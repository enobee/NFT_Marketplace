 const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
require('@nomicfoundation/hardhat-toolbox');

// const privateKey = fs.readFileSync('.secret').toString().trim();
const ALCHEMY_API_KEY = fs.readFileSync('.secret1').toString().trim();

const GOERLI_PRIVATE_KEY = fs.readFileSync('.secret').toString().trim();

const API_KEY = fs.readFileSync('.secret3').toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: API_KEY,
  },
};
