import Link from "next/link";
import LabLogo from "@/components/ui/lab-logo";
import NavLinks from "@/components/ui/playground/nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link href="/" className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-900 p-4 md:h-40">
        <div className="w-32 md:w-40">
          <LabLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-y-2 md:space-x-0">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
