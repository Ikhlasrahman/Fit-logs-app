import { IWorkout } from "@/types/library.type";
import LibraryCard from "../shared/LibraryCard";


const getLibaries = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await response.json();
    return data;

}
const TheLibary = async () => {

    const libraryData = await getLibaries();


    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="font-oswald text-3xl font-bold uppercase leading-none text-white sm:text-4xl">
                        The Library
                    </h2>

                    <p className="mt-2 font-inter text-sm text-[#9CA3AF] sm:text-base">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {/* Workout Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {libraryData.map((library: IWorkout,) => {
                        return <LibraryCard key={library.id} library={library} />
                    }

                    )}

                </div>
            </div>
        </section>
    );
};

export default TheLibary;