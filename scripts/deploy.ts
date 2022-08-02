import { ethers } from "hardhat";

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const storage = await SimpleStorage.deploy();

  console.log("Lock with 1 ETH deployed to:", storage.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
