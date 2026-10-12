import type { HardhatRuntimeEnvironment } from "hardhat/types/hre";
import type { Result } from "hardhat/types/utils";
import { successfulResult, errorResult } from "hardhat/utils/result";

interface AccountTaskArguments {}

export default async function (
  _taskArguments: AccountTaskArguments,
  hre: HardhatRuntimeEnvironment,
): Promise<Result<string[], string>> {
  const { provider } = await hre.network.create();
  const accounts = await provider.request({ method: "eth_accounts" });

  console.log(accounts);

  if (accounts.length === 0) {
    return errorResult("No accounts found");
  }

  return successfulResult(accounts);
}
