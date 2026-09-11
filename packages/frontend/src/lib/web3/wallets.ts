import { env } from "@/config/env";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { injectedWallet, metaMaskWallet, walletConnectWallet } from "@rainbow-me/rainbowkit/wallets";

export const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [injectedWallet, metaMaskWallet],
    },
    {
      groupName: "Suggested",
      wallets: [walletConnectWallet],
    },
  ],
  {
    appName: "My RainbowKit DApp",
    projectId: env.NEXT_PUBLIC_PROJECT_ID,
  },
);
