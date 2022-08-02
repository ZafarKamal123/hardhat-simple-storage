import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Storage", () => {
  async function getStorageContractFixture() {
    const Storage = await ethers.getContractFactory("SimpleStorage");
    const DeployedStorageContract = await Storage.deploy();

    return { storage: DeployedStorageContract };
  }

  it("Should expect the initial stored number to be 0", async () => {
    const { storage } = await loadFixture(getStorageContractFixture);

    const currentNumber = (await storage.get()).toNumber();

    expect(currentNumber).to.equal(0);
  });

  it("Should store the number correctly", async () => {
    const { storage } = await loadFixture(getStorageContractFixture);

    // Updating the number.
    await storage.set(100);

    const currentNumber = (await storage.get()).toNumber();

    expect(currentNumber).to.equal(100);
  });

  it("Should reset the number correctly", async () => {
    const { storage } = await loadFixture(getStorageContractFixture);

    // Updating the number.
    await storage.set(100);

    const currentNumber = (await storage.get()).toNumber();

    expect(currentNumber).to.equal(100);

    // Now reseting the number.
    await storage.reset();

    // Now the number should be 0, after reset.
    const newNumber = (await storage.get()).toNumber();

    expect(newNumber).to.equal(0);
  });
});
