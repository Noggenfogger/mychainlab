import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/components/ui/fonts";

export default function LabLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <RocketLaunchIcon className="mr-4 h-8 w-8 shrink-0 rotate-15 md:h-12 md:w-12" />
      <p className="text-2xl md:text-[44px]">CHAIN LAB</p>
    </div>
  );
}
