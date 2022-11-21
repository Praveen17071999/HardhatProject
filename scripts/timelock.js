const hre = require("hardhat");

async function main() {
  const AGL  = await hre.ethers.getContractFactory("contracts/Timelock.sol:Timelock");
  const agl = await AGL.deploy("0xC94Fbd1b7B619034A3a73953fBDc888Ee62503e1",25);
  await agl.deployed();
  console.log("Token deployed to: ", agl.address);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
