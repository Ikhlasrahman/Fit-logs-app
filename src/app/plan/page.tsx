"use client";

import { PlanContext } from "@/context/PlanContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { CiClock2, CiStar } from "react-icons/ci";
import { FaCheck, FaFire } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";

const PlanPages = () => {
    const { plan, saved } = useContext(PlanContext);

    return (
        <main className="min-h-screen bg-black px-6 py-10">
            <div className="mx-auto w-full max-w-7xl">

                {/* ================= HEADER ================= */}

                <div>
                    <h1 className="font-oswald text-3xl font-bold uppercase leading-9 text-white">
                        My Plan
                    </h1>

                    <p className="mt-2 font-inter text-sm leading-5 text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>


                {/* ================= STATS ================= */}

                <div className="mt-6 grid grid-cols-1 rounded-2xl border border-[#374151] bg-[#13161D] px-6 py-8 sm:grid-cols-3">

                    {/* EXERCISES */}

                    <div className="pb-6 sm:pb-0 sm:pr-8">
                        <p className="font-inter text-xs text-[#8A92A0]">
                            Exercises
                        </p>

                        <p className="mt-1 font-oswald text-4xl font-bold leading-10 text-[#CCFF00]">
                            {plan.length}
                        </p>
                    </div>


                    {/* MINUTES */}

                    <div className="border-t border-[#232732] pt-6 sm:border-l sm:border-t-0 sm:px-8 sm:pt-0">
                        <p className="font-inter text-xs text-[#8A92A0]">
                            Minutes
                        </p>

                        <p className="mt-1 font-oswald text-4xl font-bold leading-10 text-white">
                            {plan.reduce(
                                (total, workout) =>
                                    total + workout.duration,
                                0
                            )}
                        </p>
                    </div>


                    {/* CALORIES */}

                    <div className="border-t border-[#232732] pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                        <p className="font-inter text-xs text-[#8A92A0]">
                            Calories
                        </p>

                        <p className="mt-1 font-oswald text-4xl font-bold leading-10 text-white">
                            {plan.reduce(
                                (total, workout) =>
                                    total + workout.caloriesBurned,
                                0
                            )}
                        </p>
                    </div>

                </div>


                {/* ================= TABS ================= */}

                <div className="relative mt-10">

                    <div className="tabs w-full">

                        {/* ================= TODAY'S PLAN ================= */}

                        <input
                            type="radio"
                            name="my_tabs_2"
                            className="tab"
                            aria-label="Today's Plan"
                            defaultChecked
                        />

                        <div className="tab-content w-full border-0 bg-transparent p-0 pt-8">

                            {/* EMPTY STATE */}

                            {plan.length === 0 ? (

                                <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#374151] bg-[#13161D] px-6 text-center">

                                    <h2 className="font-oswald text-3xl font-bold uppercase leading-9 text-white">
                                        Nothing Here Yet
                                    </h2>

                                    <p className="mt-2 font-inter text-sm leading-5 text-[#9CA3AF]">
                                        Browse the library and add a lift to get today moving.
                                    </p>

                                    <Link
                                        href="/"
                                        className="mt-8 rounded-full bg-[#CCFF00] px-8 py-3 font-inter text-sm font-semibold text-black shadow-[0_10px_30px_rgba(204,255,0,0.2)] transition hover:bg-[#B8EB00]"
                                    >
                                        Go to workouts
                                    </Link>

                                </div>

                            ) : (

                                /* WORKOUT LIST */

                                <div className="flex flex-col gap-5">

                                    {plan.map((workout) => (

                                        <div
                                            key={workout.id}
                                            className="flex flex-col gap-5 rounded-2xl border border-[#374151] bg-[#13161D] p-5 md:flex-row md:items-center md:justify-between"
                                        >

                                            {/* LEFT SIDE */}

                                            <div className="flex items-center gap-5">

                                                <Image
                                                    src={workout.image}
                                                    alt={workout.name}
                                                    width={200}
                                                    height={112}
                                                    className="h-20 w-36 rounded-xl object-cover sm:h-24 sm:w-48"
                                                />

                                                <div>

                                                    <h2 className="font-oswald text-lg font-bold uppercase leading-6 text-white">
                                                        {workout.name}
                                                    </h2>

                                                    <p className="mt-1 font-inter text-sm text-[#8A92A0]">
                                                        {workout.equipment}
                                                    </p>

                                                    <div className="mt-3 flex flex-wrap items-center gap-4">

                                                        <span className="flex items-center gap-1.5 font-inter text-sm text-[#D1D5DB]">
                                                            <CiClock2 className="text-lg text-[#CCFF00]" />
                                                            {workout.duration} min
                                                        </span>

                                                        <span className="flex items-center gap-1.5 font-inter text-sm text-[#D1D5DB]">
                                                            <FaFire className="text-sm text-[#CCFF00]" />
                                                            {workout.caloriesBurned} kcal
                                                        </span>

                                                        <span className="flex items-center gap-1.5 font-inter text-sm text-[#D1D5DB]">
                                                            <CiStar className="text-lg text-[#CCFF00]" />
                                                            {workout.rating}
                                                        </span>

                                                    </div>

                                                </div>

                                            </div>


                                            {/* RIGHT SIDE */}

                                            <div className="flex items-center gap-3">

                                                <Link
                                                    href={`/workouts/${workout.id}`}
                                                    className="rounded-full border border-[#374151] px-5 py-2.5 font-inter text-sm text-white transition hover:bg-[#232732]"
                                                >
                                                    View Details
                                                </Link>

                                                <button
                                                    type="button"
                                                    className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-5 py-2.5 font-inter text-sm font-semibold text-black transition hover:bg-[#B8EB00]"
                                                >
                                                    <FaCheck className="text-sm" />
                                                    Mark as Done
                                                </button>

                                                <button
                                                    type="button"
                                                    className="px-1 text-2xl leading-none text-[#6B7280] transition hover:text-white"
                                                >
                                                    ×
                                                </button>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            )}

                        </div>


                        {/* ================= SAVED ================= */}

                        <input
                            type="radio"
                            name="my_tabs_2"
                            className="tab"
                            aria-label="Saved"
                        />

                        <div className="tab-content w-full border-0 bg-transparent p-0 pt-8">

                            {/* EMPTY STATE */}

                            {saved.length === 0 ? (

                                <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#374151] bg-[#13161D] px-6 text-center">

                                    <h2 className="font-oswald text-3xl font-bold uppercase leading-9 text-white">
                                        Nothing Here Yet
                                    </h2>

                                    <p className="mt-2 font-inter text-sm leading-5 text-[#9CA3AF]">
                                        Browse the library and add a lift to get today moving.
                                    </p>

                                    <Link
                                        href="/"
                                        className="mt-8 rounded-full bg-[#CCFF00] px-8 py-3 font-inter text-sm font-semibold text-black shadow-[0_10px_30px_rgba(204,255,0,0.2)] transition hover:bg-[#B8EB00]"
                                    >
                                        Go to workouts
                                    </Link>

                                </div>

                            ) : (

                                /* SAVED LIST */

                                <div className="flex flex-col gap-5">

                                    {saved.map((workout) => (

                                        <div
                                            key={workout.id}
                                            className="flex flex-col gap-5 rounded-2xl border border-[#374151] bg-[#13161D] p-5 md:flex-row md:items-center md:justify-between"
                                        >

                                            {/* LEFT SIDE */}

                                            <div className="flex items-center gap-5">

                                                <Image
                                                    src={workout.image}
                                                    alt={workout.name}
                                                    width={200}
                                                    height={112}
                                                    className="h-20 w-36 rounded-xl object-cover sm:h-24 sm:w-48"
                                                />

                                                <div>

                                                    <h2 className="font-oswald text-lg font-bold uppercase leading-6 text-white">
                                                        {workout.name}
                                                    </h2>

                                                    <p className="mt-1 font-inter text-sm text-[#8A92A0]">
                                                        {workout.equipment}
                                                    </p>

                                                    <div className="mt-3 flex flex-wrap items-center gap-4">

                                                        <span className="flex items-center gap-1.5 font-inter text-sm text-[#D1D5DB]">
                                                            <CiClock2 className="text-lg text-[#CCFF00]" />
                                                            {workout.duration} min
                                                        </span>

                                                        <span className="flex items-center gap-1.5 font-inter text-sm text-[#D1D5DB]">
                                                            <FaFire className="text-sm text-[#CCFF00]" />
                                                            {workout.caloriesBurned} kcal
                                                        </span>

                                                        <span className="flex items-center gap-1.5 font-inter text-sm text-[#D1D5DB]">
                                                            <CiStar className="text-lg text-[#CCFF00]" />
                                                            {workout.rating}
                                                        </span>

                                                    </div>

                                                </div>

                                            </div>


                                            {/* RIGHT SIDE */}

                                            <div className="flex items-center gap-3">

                                                <Link
                                                    href={`/workouts/${workout.id}`}
                                                    className="rounded-full border border-[#374151] px-5 py-2.5 font-inter text-sm text-white transition hover:bg-[#232732]"
                                                >
                                                    View Details
                                                </Link>

                                                <button
                                                    type="button"
                                                    className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-5 py-2.5 font-inter text-sm font-semibold text-black transition hover:bg-[#B8EB00]"
                                                >
                                                    <FaCheck className="text-sm" />
                                                    Mark as Done
                                                </button>

                                                <button
                                                    type="button"
                                                    className="px-1 text-2xl leading-none text-[#6B7280] transition hover:text-white"
                                                >
                                                    ×
                                                </button>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            )}

                        </div>

                    </div>


                    {/* ================= SORT BY ================= */}

                    <div className="absolute right-0 top-0 flex items-center gap-4">

                        <span className="font-inter text-base font-semibold text-[#9CA3AF]">
                            Sort By
                        </span>

                        <div className="relative">

                            <select
                                defaultValue="Duration"
                                className="h-12 w-32 appearance-none rounded-xl border border-[#374151] bg-[#13161D] px-4 pr-9 font-inter text-sm text-white outline-none"
                            >
                                <option value="Duration">
                                    Duration
                                </option>

                                <option value="Calories">
                                    Calories
                                </option>

                                <option value="Rating">
                                    Rating
                                </option>

                            </select>

                            <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg text-white" />

                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
};

export default PlanPages;