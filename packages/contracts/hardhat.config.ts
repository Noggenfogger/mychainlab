import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import { configVariable, defineConfig, task } from "hardhat/config";

const printAccounts = task("accounts", "Print the accounts")
  .setAction(() => import("./tasks/accounts.js"))
  .build();
// const printAccounts = task("accounts", "Print the accounts")
//   .setInlineAction(async (taskArguments, hre) => {
//     const { provider } = await hre.network.create();
//     console.log(await provider.request({ method: "eth_accounts" }));
//   })
//   .build();

export default defineConfig({
  plugins: [hardhatToolboxViemPlugin],
  solidity: {
    profiles: {
      default: {
        version: "0.8.34",
      },
      production: {
        version: "0.8.34",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("SEPOLIA_RPC_URL"),
      accounts: [configVariable("SEPOLIA_PRIVATE_KEY")],
    },
  },
  verify: {
    etherscan: {
      apiKey: configVariable("ETHERSCAN_API_KEY"),
    },
  },
  tasks: [printAccounts],
});
