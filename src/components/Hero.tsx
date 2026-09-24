import { FiArrowDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";

import heroImage from "@/assets/images/hero.png";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

const Hero = () => {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1800px] items-center overflow-hidden rounded-2xl border border-[#292c32] bg-[#15171c] px-6 py-12 sm:px-10 md:px-14 lg:min-h-[520px] lg:grid-cols-[1.25fr_0.75fr] lg:px-16 lg:py-16">
        {/* Left Content */}
        <div>
          <p className="mb-6 text-sm font-bold tracking-wider text-[#c2f800] sm:text-base">
            WORKOUT LIBRARY
          </p>

          <h1
            className={`${oswald.className} max-w-[750px] text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl lg:text-[76px]`}
          >
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-7 max-w-[460px] text-base leading-7 text-[#9b9da5] sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-9 inline-flex items-center gap-3 rounded-3xl bg-[#c2f800] px-7 py-4 text-sm font-bold text-black transition hover:bg-[#d0ff2e]"
          >
            BROWSE WORKOUTS
            <FiArrowDown className="h-5 w-5" />
          </Link>
        </div>

        {/* Right Image */}
        <div className="mt-12 flex justify-center lg:mt-0 lg:justify-end">
          <Image
            src={heroImage}
            alt="Workout exercise illustration"
            priority
            className="w-full max-w-[430px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;