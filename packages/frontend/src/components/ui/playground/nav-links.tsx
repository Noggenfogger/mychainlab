"use client";

import { usePathname } from "next/navigation";
import { HomeIcon, CurrencyYenIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type NavLink = {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const links: NavLink[] = [
  { name: "Home", href: "/playground", icon: HomeIcon },
  { name: "Dapp", href: "/playground/dapp", icon: CurrencyYenIcon },
  { name: "Resume", href: "/playground/resume", icon: DocumentTextIcon },
];

const baseStyle =
  "flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-400 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3";

const activeStyle = "bg-sky-100 text-blue-600";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ name, href, icon: LinkIcon }) => {
        const isActive = pathname === href;
        return (
          <Link key={name} href={href} className={cn(baseStyle, isActive && activeStyle)}>
            <LinkIcon className="w-6" />
            <span className="hidden md:block">{name}</span>
          </Link>
        );
      })}
    </>
  );
}
