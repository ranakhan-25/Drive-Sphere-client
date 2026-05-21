"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaCar, FaSun, FaMoon } from "react-icons/fa";
import NaveLink from "../shared/service/NaveLink";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Image from "next/image";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: session, error } = authClient.useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handelLogOut = async () => {
    const result = await authClient.signOut();
    if (!result) {
      return toast.error("LogOut is not successfully");
    }
    setDropdownOpen(false);
    return toast.success("LogOut successfully");
  };

  return (
    <nav className="sticky top-0 left-0 w-full backdrop-blur-md bg-linear-to-r from-indigo-400/30 to-pink-400/30 text-gray-900 dark:text-white shadow-md z-50 border-t-4 border-blue-500 rounded-t-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center text-2xl font-bold">
            <FaCar className="mr-2 text-yellow-400" /> DriveSphere
          </Link>

          {/* Desktop Menu */}
          <ul onClick={() => setDropdownOpen(false)} className="hidden md:flex space-x-6 lg:space-x-8 font-medium">
            <NaveLink href="/">Home</NaveLink>
            <NaveLink href="/explore-cars">Explore Cars</NaveLink>
            <NaveLink href="/add-car">Add Car</NaveLink>
            <NaveLink href="/my-bookings">My Bookings</NaveLink>
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            {session?.user ? (
              <div className="relative ">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-200 to-blue-200 px-2 py-1 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                >
                  <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-white border-2 border-white">
                    {session?.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt={session?.user?.name || "User"}
                        fill
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-purple-700 font-bold text-lg">
                        {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                      </span>
                    )}
                  </div>

                  <div className="hidden sm:flex flex-col items-start leading-tight">
                    <span className="text-sm font-semibold text-purple-700 dark:text-black">
                      {session?.user?.name}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-700">
                      Profile
                    </span>
                  </div>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white rounded shadow-lg">
                    <Link
                      onClick={() => setDropdownOpen(false)}
                      href="/add-car"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Add Car
                    </Link>
                    <Link
                      onClick={() => setDropdownOpen(false)}
                      href="/my-bookings"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      My Bookings
                    </Link>
                    <Link
                      onClick={() => setDropdownOpen(false)}
                      href="/my-added-car"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      My Added Cars
                    </Link>
                    <Link
                      onClick={() => setDropdownOpen(false)}
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handelLogOut}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
                <div className="flex items-center gap-3">
                <Link
                  href="/signin"
                  className="px-4 py-2 rounded-lg bg-linear-to-r from-indigo-200 to-purple-200 text-purple-600 font-semibold shadow-md
                           hover:from-purple-300 hover:to-pink-300
                           active:scale-95 active:shadow-inner transition-all duration-300"
                >
                  SignIn
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-lg border-2 font-semibold shadow-md
                           
                           active:scale-95 active:shadow-inner transition-all duration-300"
                >
                  SignUp
                </Link>
              </div>
            )}

            {/* theme toggled */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="cursor-pointer py-2 px-2  rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md
                         hover:from-purple-600 hover:to-pink-600
                         active:scale-95 active:shadow-inner transition-all duration-300"
            >
              {mounted ? (
                theme === "dark" ? (
                  <FaSun className="text-xl" />
                ) : (
                  <FaMoon className="text-xl" />
                )
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&#10005;</span>
              ) : (
                <span className="text-2xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 pb-4 space-y-2">
          <ul
            onClick={() => setIsOpen(false)}
            className="md:hidden  flex flex-col gap-5 pt-2 font-medium"
          >
            <NaveLink href="/">Home</NaveLink>
            <NaveLink href="/explore-cars">Explore Cars</NaveLink>
            <NaveLink href="/add-car">Add Car</NaveLink>
            <NaveLink href="/my-bookings">My Bookings</NaveLink>
            <NaveLink href="/my-added-car">My Added Cars</NaveLink>
          </ul>

          <div className="mt-9 flex gap-4 items-center">
            {session?.user && (
              <Link
                onClick={() => setIsOpen(false)}
                href="/profile"
                className="flex items-center gap-3 w-full rounded-xl bg-linear-to-r from-pink-200 to-blue-200 px-2 py-1 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                {/* Avatar */}
                <div className="relative w-11 h-11 flex items-center justify-center rounded-full overflow-hidden bg-white border-2 border-white shrink-0">
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session?.user?.name || "User"}
                      fill
                      className="object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-lg font-bold text-purple-700">
                      {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </span>
                  )}
                </div>

                {/* User Info */}
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-sm font-semibold text-purple-800 dark:text-black">
                    {session?.user?.name || "Unknown User"}
                  </span>

                  <span className="text-xs font-medium text-purple-700 dark:text-gray-800">
                    View Profile
                  </span>
                </div>
              </Link>
            )}

            {session?.user ? (
              <div className="space-y-2">
                <button
                  onClick={handelLogOut}
                  className=" cursor-pointer px-5 py-2 rounded-lg bg-linear-to-r from-indigo-200 to-purple-200 text-purple-600 font-semibold shadow-md
                         
                         active:scale-95 active:shadow-inner transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
                <div className="flex items-center gap-3">
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/signin"
                  className=" px-5 py-2 rounded-lg bg-linear-to-r from-indigo-200 to-purple-200 font-semibold shadow-md active:scale-95 text-purple-600 active:shadow-inner transition-all duration-300"
                >
                  Signin
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                  href="/register"
                  className="px-4 py-2 rounded-lg border-2 font-semibold shadow-md
                           
                           active:scale-95 active:shadow-inner transition-all duration-300"
                >
                  SignUp
                </Link>
              </div>
            )}

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="cursor-pointer py-2 px-2  rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md
                         hover:from-purple-600 hover:to-pink-600
                         active:scale-95 active:shadow-inner transition-all duration-300"
            >
              {mounted ? (
                theme === "dark" ? (
                  <FaSun className="text-xl" />
                ) : (
                  <FaMoon className="text-xl" />
                )
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
