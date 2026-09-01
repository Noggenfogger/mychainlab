import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  client: {
    NEXT_PUBLIC_PROJECT_ID: z.string().trim().min(1),
    NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
    NEXT_PUBLIC_BSC_MAINNET_RPC_URL: z.url().default("https://bsc-dataseed.binance.org/"),
    NEXT_PUBLIC_BSC_TESTNET_RPC_URL: z.url().default("https://data-seed-prebsc-2-s3.binance.org:8545/"),
    NEXT_PUBLIC_ETH_MAINNET_RPC_URL: z.url().default("https://eth.llamarpc.com"),
    NEXT_PUBLIC_ETH_TESTNET_RPC_URL: z.url().default("https://rpc.sepolia.org"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_BSC_MAINNET_RPC_URL: process.env.NEXT_PUBLIC_BSC_MAINNET_RPC_URL,
    NEXT_PUBLIC_BSC_TESTNET_RPC_URL: process.env.NEXT_PUBLIC_BSC_TESTNET_RPC_URL,
    NEXT_PUBLIC_ETH_MAINNET_RPC_URL: process.env.NEXT_PUBLIC_ETH_MAINNET_RPC_URL,
    NEXT_PUBLIC_ETH_TESTNET_RPC_URL: process.env.NEXT_PUBLIC_ETH_TESTNET_RPC_URL,
  },
});
