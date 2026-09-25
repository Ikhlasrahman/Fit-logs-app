"use client";

import { PlanContext } from "@/context/PlanContext";
import Image from "next/image";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";

const PlanPages = () => {

    const { plan, saved } = useContext(PlanContext)
    console.log(plan, saved, 'Plan', 'Saved')
    return (

        <main className="min-h-screen bg-[#000000] px-6 py-10">
            <div className="mx-auto w-full max-w-7xl">

                {/* HEADER */}
                <div>
                    <h1 className="font-oswald text-3xl font-bold uppercase leading-9 text-white">
                        My Plan
                    </h1>

                    <p className="mt-2 font-inter text-sm leading-5 text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* STATS */}
                <div className="mt-6 grid grid-cols-1 rounded-2xl border border-[#374151] bg-[#13161D] px-6 py-8 sm:grid-cols-3">

                    {/* EXERCISES */}
                    <div className="pb-6 sm:pb-0 sm:pr-8">
                        <p className="font-inter text-xs text-gray-400">
                            Exercises
                        </p>

                        <p className="mt-1 font-oswald text-4xl font-bold leading-10 text-[#CCFF00]">
                            {plan.length}
                        </p>
                    </div>

                    {/* MINUTES */}
                    <div className="border-t border-[#232732] pt-6 sm:border-l sm:border-t-0 sm:px-8 sm:pt-0">
                        <p className="font-inter text-xs text-gray-400">
                            Minutes
                        </p>

                        <p className="mt-1 font-oswald text-4xl font-bold leading-10 text-white">
                            {plan.reduce(
                                (total, workout) => total + workout.duration,
                                0
                            )}
                        </p>
                    </div>

                    {/* CALORIES */}
                    <div className="border-t border-[#232732] pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                        <p className="font-inter text-xs text-gray-400">
                            Calories
                        </p>

                        <p className="mt-1 font-oswald text-4xl font-bold leading-10 text-white">
                            {plan.reduce(
                                (total, workout) => total + workout.caloriesBurned,
                                0
                            )}
                        </p>
                    </div>

                </div>

                {/* TABS + SORT */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    {/* TABS */}
                    <div className="flex w-fit items-center gap-1 rounded-xl border border-[#232732] bg-[#13161D] p-1">

                        <button className="rounded-lg border border-[#232732] bg-[#1F242D] px-4 py-1.5 font-inter text-xs font-bold text-white">
                            Today's Plan
                        </button>

                        <button className="px-4 py-1.5 font-inter text-xs text-gray-400">
                            Saved
                        </button>

                    </div>

                    {/* SORT */}
                    <div className="flex items-center gap-3">
                        <span className="font-inter text-xs text-gray-400">
                            Sort By
                        </span>

                        <select className="rounded-lg border border-[#374151] bg-[#13161D] px-3 py-2 font-inter text-xs text-white outline-none">
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Rating</option>
                        </select>
                    </div>

                </div>

                {/* PLAN LIST */}
                <div className="mt-4 flex flex-col gap-4">

                    {plan.map((workout) => (
                        <div
                            key={workout.id}
                            className="flex flex-col gap-4 rounded-2xl border border-[#374151] bg-[#13161D] p-4 sm:flex-row sm:items-center sm:justify-between"
                        >

                            {/* LEFT SIDE */}
                            <div className="flex items-center gap-4">

                                <Image
                                    src={workout.image}
                                    alt={workout.name}
                                    className="h-20 w-36 rounded-xl object-cover"
                                    width={144}
                                    height={80}
                                />

                                <div>

                                    <h2 className="font-oswald text-base font-bold uppercase leading-6 tracking-wide text-white">
                                        {workout.name}
                                    </h2>

                                    <p className="font-inter text-xs font-semibold text-gray-400">
                                        {workout.equipment}
                                    </p>

                                    <div className="mt-1.5 flex items-center gap-3">

                                        <span className="font-inter text-xs text-gray-300">
                                            {workout.duration} min
                                        </span>

                                        <span className="font-inter text-xs text-gray-300">
                                            {workout.caloriesBurned} kcal
                                        </span>

                                        <span className="font-inter text-xs text-gray-300">
                                            {workout.rating}
                                        </span>

                                    </div>

                                </div>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className="flex items-center gap-3">

                                <button className="rounded-full border border-gray-700 px-4 py-2 font-inter text-xs text-white">
                                    View Details
                                </button>

                                <button className="rounded-full bg-[#CCFF00] px-4 py-2 font-inter text-xs font-semibold text-black">
                                    Mark as Done
                                </button>

                                <button className="px-2 text-xl text-gray-500">
                                    <RxCross2 />
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </main>
    );
};

export default PlanPages;