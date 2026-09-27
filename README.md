This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 合约命令

```bash
pnpm test:sol --grep testFuzz_Inc                          # 测试指定函数
pnpm test:sol --grep-exclude testFuzz_Inc                  # 测试除指定函数外的所有函数
pnpm test:sol --chain-type op                              # 测试指定链类型：多链支持
pnpm test:sol --gas-stats                                  # 测试gas消耗
pnpm test:sol --gas-stats-json gas-stats.json              # 测试gas消耗并保存到文件
pnpm test:sol --snapshot                                   # 测试gas快照
pnpm test:sol --snapshot-check                             # 测试gas快照：修改后与前一个快照间任何差异
pnpm test:sol --snapshot-check --tolerance 0.5             # 测试gas快照：给快照检查增加微小容差
pnpm deploy:local Counter.ts                               # 本地部署
pnpm deploy:sepolia Counter.ts --network sepolia --verify  # 部署并验证
pnpm keystore:set --force SEPOLIA_RPC_URL                  # 修改keystore
pnpm hardhat run scripts/send-op-tx.ts --build-profile production --network sepolia # 脚本部署
```
