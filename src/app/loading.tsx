import { FiActivity } from "react-icons/fi";

const Loading = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-6">
            <div className="flex flex-col items-center text-center">

                {/* LOGO / ICON */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#374151] bg-[#13161D]">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-[#CCFF00]/10 blur-xl" />

                    <FiActivity className="relative z-10 text-4xl text-[#CCFF00]" />

                </div>


                {/* BRAND */}
                <h1 className="mt-6 font-oswald text-3xl font-bold uppercase tracking-wide text-white">
                    Fit<span className="text-[#CCFF00]">Log</span>
                </h1>


                {/* MESSAGE */}
                <p className="mt-2 font-inter text-sm text-[#8A92A0]">
                    Preparing your workout...
                </p>


                {/* LOADING BAR */}
                <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-[#232732]">

                    <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-[#CCFF00]" />

                </div>

            </div>


            {/* CUSTOM ANIMATION */}
            <style>
                {`
                    @keyframes loading {
                        0% {
                            transform: translateX(-100%);
                        }

                        50% {
                            transform: translateX(100%);
                        }

                        100% {
                            transform: translateX(300%);
                        }
                    }
                `}
            </style>
        </main>
    );
};

export default Loading;