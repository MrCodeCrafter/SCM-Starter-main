// deploy.js
const hre = require("hardhat");

async function main() {
  const initBalance = ethers.utils.parseEther("1"); // Ensure the balance is in wei
  const Assessment = await hre.ethers.getContractFactory("Assessment");
  const assessment = await Assessment.deploy(initBalance);
  await assessment.deployed();

  console.log(`A contract with balance of 1 ETH deployed to ${assessment.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
