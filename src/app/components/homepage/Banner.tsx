import heroImage from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
    return (
        <section className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto grid w-full max-w-7xl items-center overflow-hidden rounded-2xl border border-[#1C1F26] bg-[#0C0D10] md:grid-cols-2">

                {/* Content */}
                <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20">

                    {/* Eyebrow */}
                    <p className="font-inter text-xs font-semibold uppercase tracking-[0.15em] text-[#CCFF00] sm:text-sm">
                        Workout Library
                    </p>

                    {/* Heading */}
                    <h1 className="mt-5 max-w-3xl font-oswald text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl">
                        Train with intent. Log
                        <br />
                        every set.
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-2xl font-inter text-sm leading-6 text-[#9CA3AF] sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s work
                        add up.
                    </p>

                    {/* CTA */}
                    <div className="mt-7 sm:mt-8">
                        <Link
                            href="/workouts"
                            className="inline-flex items-center justify-center rounded-lg bg-[#CCFF00] px-6 py-3.5 font-inter text-sm font-bold uppercase text-black transition hover:bg-[#b8ed00]"
                        >
                            Browse Workouts
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="relative flex aspect-square w-full items-center justify-center">
                    <Image
                        src={heroImage}
                        alt="Workout machine"
                        fill
                        priority
                        className="object-contain object-center p-6 sm:p-10 md:p-8 lg:p-10"
                    />
                </div>

            </div>
        </section>
    );
};

export default BannerSection;