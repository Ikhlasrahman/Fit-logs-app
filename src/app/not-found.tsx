import Link from "next/link";
import { FiActivity, FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-6">
            <div className="flex max-w-lg flex-col items-center text-center">

                {/* ICON */}
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-[#374151] bg-[#13161D]">

                    <div className="absolute inset-0 rounded-2xl bg-[#CCFF00]/10 blur-2xl" />

                    <FiActivity className="relative z-10 text-5xl text-[#CCFF00]" />

                </div>


                {/* 404 */}
                <h1 className="mt-8 font-oswald text-7xl font-bold leading-none text-[#CCFF00]">
                    404
                </h1>


                {/* TITLE */}
                <h2 className="mt-4 font-oswald text-3xl font-bold uppercase text-white">
                    Workout Not Found
                </h2>


                {/* DESCRIPTION */}
                <p className="mt-3 max-w-md font-inter text-sm leading-6 text-[#8A92A0]">
                    Looks like this workout took a day off. The page you're
                    looking for doesn't exist or may have been moved.
                </p>


                {/* BUTTON */}
                <Link
                    href="/"
                    className="mt-8 flex items-center gap-2 rounded-full bg-[#CCFF00] px-7 py-3 font-inter text-sm font-semibold text-black transition hover:bg-[#B8EB00]"
                >
                    <FiArrowLeft className="text-base" />
                    Back to workouts
                </Link>

            </div>
        </main>
    );
};

export default NotFound;