import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { keccak256 } from "viem";
import { network } from "hardhat";

describe("Counter", async function () {
  const { viem, networkHelpers } = await network.create();
  // const { viem } = await network.create({chainType: "op",});   // 多链支持
  const publicClient = await viem.getPublicClient();

  it("Should emit the Increment event when calling the inc() function", async function () {
    const counter = await viem.deployContract("Counter");

    await viem.assertions.emitWithArgs(
      counter.write.inc(),
      counter,
      "Increment",
      [1n],
    );
  });

  it("Should allow the owner revert for non-owners", async function () {
    const counter = await viem.deployContract("Counter");

    const nonOwnerAddress = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

    // Impersonate the non-owner account
    await networkHelpers.impersonateAccount(nonOwnerAddress);

    // Fund the non-owner account with some ETH to pay for gas
    await networkHelpers.setBalance(nonOwnerAddress, 10n ** 18n);

    // Call inc() as a non-owner - should revert.
    await viem.assertions.revertWith(
      counter.write.inc({ account: nonOwnerAddress }),
      "only the owner can increment the counter",
    );
  });

  it("The sum of the Increment events should match the current value", async function () {
    const counter = await viem.deployContract("Counter");
    const deploymentBlockNumber = await publicClient.getBlockNumber();

    // run a series of increments
    for (let i = 1n; i <= 10n; i++) {
      await counter.write.incBy([i]);
    }

    const events = await publicClient.getContractEvents({
      address: counter.address,
      abi: counter.abi,
      eventName: "Increment",
      fromBlock: deploymentBlockNumber,
      strict: true,
    });

    // check that the aggregated events match the current value
    let total = 0n;
    for (const event of events) {
      total += event.args.by;
    }

    assert.equal(total, await counter.read.x());
  });
});
