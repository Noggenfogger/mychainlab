<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:hardhat-agent-rules -->

# Hardhat 3 规则（必读）

本项目 `packages/contracts` 使用 **Hardhat 3**，项目中已保留 `.agents/skills/` 下的 SKILL.md 文件。

## 强制要求

1. **在对 `packages/contracts` 做任何操作（测试、编译、部署、编写/修改测试文件）之前，必须先读取以下文件：**
   - `packages/contracts/.agents/skills/hardhat/SKILL.md`
   - `packages/contracts/.agents/skills/hardhat-toolbox-viem/SKILL.md`
   - `packages/contracts/hardhat.config.ts`
   - `packages/contracts/package.json`

2. **禁止凭训练数据臆断工具链。** `.t.sol` 文件是 Hardhat 3 原生支持的 Solidity 测试，不需要 Foundry / `forge` 命令。

3. **运行测试的正确命令是 `hardhat test`**，它同时执行：
   - Solidity 测试（`.t.sol` 文件）
   - TypeScript 测试（`test/` 目录下的 `.ts` 文件）

4. **monorepo 根目录运行测试：** `pnpm test`（已通过 `pnpm --filter` 转发到 `@mychainlab/contracts` 子包的 `hardhat test`）。

5. `forge-std` 在 `package.json` 中作为依赖存在，仅用于提供 Solidity 测试的 `Test.sol` 断言库和 cheatcode 类型，**不代表项目使用 Foundry 工具链**。

<!-- END:hardhat-agent-rules -->

