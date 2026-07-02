"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NaveLink = ({ href, children }) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link
      href={href}
      className={`${isActive ? " bg-[#e6bcf3] px-3 py-1 rounded-full text--white dark:text-black   hover:underline" : "hover:underline hover:text-[#a51ccf] "}`}
    >
      {children}
    </Link>
  );
};

export default NaveLink;
