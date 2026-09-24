import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-900 bg-zinc-950 py-10">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Image src={logo} width={48} height={28} alt="Fitlog Logo" />
                </Link>

                {/* Copyright */}
                <p className="text-center font-inter text-xs font-normal leading-4 text-gray-500 sm:text-right">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
}