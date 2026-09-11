import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { mainnet, bsc, bscTestnet } from "wagmi/chains";
import { env } from "@/config/env";
import { connectors } from "@/lib/web3/wallets";

export function getConfig() {
  return createConfig({
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    chains: [mainnet, bsc, bscTestnet],
    transports: {
      [mainnet.id]: http(env.NEXT_PUBLIC_ETH_MAINNET_RPC_URL, {
        batch: false, // 关闭自动批量请求，避免一次性发送大量请求触发限流
        retryCount: 3, // 限制失败重试次数，避免无限重试刷爆请求量
        retryDelay: 1000, // 重试间隔1秒，平滑请求频率
      }),
      [bsc.id]: http(env.NEXT_PUBLIC_BSC_MAINNET_RPC_URL),
      [bscTestnet.id]: http(env.NEXT_PUBLIC_BSC_TESTNET_RPC_URL),
    },
    connectors: connectors,
  });
}

declare module "wagmi" {
  interface Register {
    config: ReturnType<typeof getConfig>;
  }
}
