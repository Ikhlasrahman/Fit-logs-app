'use client'
import logo from "@/assets/logo.png";
import { PlanContext } from "@/context/PlanContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {
    const { plan, saved } = useContext(PlanContext)
    return (
        <header className="w-full border-b border-[#1C1F26] bg-[#000000]/95 backdrop-blur-[2px]">
            <nav className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2.5"
                >
                    <Image src={logo} width={94} height={28} alt="Fitlog Logo" />
                </Link>

                {/* Navigation */}
                <div className="hidden items-center sm:flex">
                    <Link
                        href="/"
                        className="rounded-full bg-[#1A2312] px-4 py-1.5 font-inter text-xs font-semibold leading-4 text-[#CCFF00]"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/plan"
                        className="px-4 py-1.5 font-inter text-xs font-medium leading-4 text-[#9CA3AF] transition-colors hover:text-white"
                    >
                        My Plan
                    </Link>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3 sm:gap-6">

                    {/* Plan */}
                    <div className="flex items-center gap-2">
                        <span className="hidden font-inter text-xs font-medium leading-4 text-[#D1D5DB] xs:inline sm:inline">
                            Plan
                        </span>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] font-inter text-xs font-bold leading-4 text-black">
                            {plan.length}
                        </span>
                    </div>

                    {/* Saved */}
                    <div className="flex items-center gap-2">
                        <span className="hidden font-inter text-xs font-medium leading-4 text-[#9CA3AF] sm:inline">
                            Saved
                        </span>

                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#2D313B] font-inter text-xs font-medium leading-4 text-[#D1D5DB]">
                            {saved.length}
                        </span>
                    </div>

                </div>
            </nav>
        </header>
    );
}