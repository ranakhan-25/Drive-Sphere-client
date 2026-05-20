"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NaveLink = ({ href, children }) => {
  const path = usePathname()
  const isActive = path === href;
  return (
    <Link href={href} className={`${isActive? "bg-linear-to-r from-pink-300 to-blue-300 px-3 py-1 rounded-full text--white dark:text-black hover:bg-linear-r hover:from-blue-300 hover:to-pink-300 hover:underline" : "hover:underline hover:text-red-500"}`}>{children}</Link>
  )
}

export default NaveLink