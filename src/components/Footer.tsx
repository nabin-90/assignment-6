import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#292c32] bg-[#08090b]">
      <div className="mx-auto flex min-h-[120px] max-w-[1550px] items-center justify-between gap-6 px-8">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="FitLog"
            width={35}
            height={35}
            priority
          />

          <span className="ml-2.5 text-xl font-bold tracking-wide text-white sm:text-2xl">
            FITLOG
          </span>
        </Link>

        {/* Right - Copyright */}
        <p className="text-right text-sm text-[#737783]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;