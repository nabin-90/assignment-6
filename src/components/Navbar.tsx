"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/assets/images/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-full px-5 py-2.5 text-base font-medium transition ${
            pathname === "/"
              ? "bg-[#18240c] text-[#c2f800]"
              : "text-[#9b9da5] hover:bg-[#18240c] hover:text-[#c2f800]"
          }`}
        >
          Workout
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={`rounded-full px-5 py-2.5 text-base font-medium transition ${
            pathname === "/my-plan"
              ? "bg-[#18240c] text-[#c2f800]"
              : "text-[#9b9da5] hover:bg-[#18240c] hover:text-[#c2f800]"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="h-[114px] border-b border-[#1c1e22] bg-[#0c0d10] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-full max-w-[1800px] items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="dropdown dropdown-start lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square border border-[#3a3d44]"
            >
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-48 rounded-2xl border border-[#292c32] bg-[#191c21] p-3 shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="FitLog" width={35} height={35} priority />

            <span className="ml-2.5 text-xl font-bold tracking-wide text-white sm:text-2xl">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 lg:flex">{links}</ul>

        {/* Status */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Plan */}
          <div className="flex items-center gap-2 text-sm text-[#9b9da5] sm:text-base">
            <span>Plan</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c2f800] text-sm font-semibold text-black">
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2 text-sm text-[#9b9da5] sm:text-base">
            <span>Saved</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#3a3d44] text-sm text-[#b4b6bd]">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
