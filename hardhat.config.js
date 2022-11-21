require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/Z6B3IqgzGPG1SIAt4lbPB-puW-Ma6_5S", //"https://polygon-mumbai.g.alchemy.com/v2/KyrGrbSBI-QhT40cZzznn4VHUnOP4QOZ",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },

  etherscan: {
    apiKey: `${process.env.POLYGONSCAN_API_KEY}`,
 }
};
