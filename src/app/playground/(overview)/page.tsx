import { Metadata } from "next";
import { lusitana } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: "Playground",
};

export default async function Page() {
  // 模拟数据加载延迟，用于验证 loading.tsx 效果
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Home page</h1>
    </main>
  );
}
