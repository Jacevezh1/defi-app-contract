const hre = require("hardhat");

const RewardToken = 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512;
async function main() {

  // We get the contract to deploy
  const Staking = await hre.ethers.getContractFactory(RewardToken, RewardToken);
  const staking = await Staking.deploy();

  await staking.deployed();

  console.log("Staking deployed to:", staking.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
