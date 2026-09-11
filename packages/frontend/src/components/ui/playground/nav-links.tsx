"use client";

import { usePathname } from "next/navigation";
import { HomeIcon, CurrencyYenIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/playground", icon: HomeIcon },
  {
    name: "Dapp",
    href: "/playground/dapp",
    icon: CurrencyYenIcon,
  },
  { name: "Resume", href: "/playground/resume", icon: DocumentTextIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-400 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
