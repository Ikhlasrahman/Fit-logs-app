import AddTodaysPlanButton from "@/app/components/workoutDetailsAction/AddTodaysPlanButton";
import SaveForLaterButton from "@/app/components/workoutDetailsAction/SaveForLaterButton";
import { IWorkout } from "@/types/library.type";
import Image from "next/image";


interface IWorkOutDetailspageProps {
    params: Promise<{
        id: string;
    }>;
}
const getLibaries = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await response.json();
    return data;

}
const WorkOutDetailspage = async ({ params }: IWorkOutDetailspageProps) => {

    const { id } = await params;
    const workoutData = await getLibaries();
    const workout = workoutData.find(
        (liabary: IWorkout) => String(liabary.id) == String(id),
    ) as IWorkout;

    console.log(workout)

    return (
        <main className="px-6 py-12">
            <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2">

                {/* IMAGE */}
                <div>
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        height={773}
                        width={588}
                        className="h-full w-full rounded-2xl object-cover"
                    />
                </div>

                {/* DETAILS */}
                <div>

                    <h1 className="font-oswald text-4xl font-bold uppercase text-white">
                        {workout.name}
                    </h1>

                    <p className="mt-4 font-inter text-base leading-6 text-gray-400">
                        {workout.description}
                    </p>

                    {/* MUSCLE GROUPS */}
                    <div className="mt-5 flex gap-2">
                        {workout.muscleGroups.map((muscle: string) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#CCFF00] px-3.5 py-1 text-xs font-semibold text-neutral-900"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* WORKOUT INFO */}
                    <div className="mt-7 overflow-hidden rounded-2xl border border-[#374151] bg-[#171A21]">

                        <div className="flex justify-between px-6 py-3.5">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                Equipment
                            </span>
                            <span className="text-sm text-gray-200">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex justify-between border-t border-[#374151] px-6 py-3.5">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                Difficulty
                            </span>
                            <span className="text-sm text-gray-200">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex justify-between border-t border-[#374151] px-6 py-3.5">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                Sets
                            </span>
                            <span className="text-sm text-gray-200">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex justify-between border-t border-[#374151] px-6 py-3.5">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                Reps
                            </span>
                            <span className="text-sm text-gray-200">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex justify-between border-t border-[#374151] px-6 py-3.5">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                Duration
                            </span>
                            <span className="text-sm text-gray-200">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex justify-between border-t border-[#374151] px-6 py-3.5">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                Calories
                            </span>
                            <span className="text-sm text-gray-200">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex justify-between border-t border-[#374151] px-6 py-3.5">
                            <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                                Rating
                            </span>
                            <span className="text-sm text-gray-200">
                                {workout.rating}
                            </span>
                        </div>



                    </div>

                    {/* INSTRUCTIONS */}
                    <div className="mt-8">
                        <h2 className="font-inter text-base font-extrabold uppercase tracking-wide text-white">
                            Instructions
                        </h2>

                        <div className="mt-4 space-y-3">
                            {workout.instructions.map((instruction: string, index: number) => (
                                <div key={index} className="flex gap-2">
                                    <span className="text-sm text-gray-400">
                                        {index + 1}.
                                    </span>

                                    <p className="text-sm leading-6 text-gray-300">
                                        {instruction}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-8 flex gap-4">
                        <AddTodaysPlanButton workout={workout} />

                        <SaveForLaterButton workout={workout} />
                    </div>

                </div>
            </div>
        </main>
    );
};

export default WorkOutDetailspage;