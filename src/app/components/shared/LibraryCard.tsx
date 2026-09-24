import { IWorkout } from '@/types/library.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IWorkoutCardProps{
library:IWorkout;
}

const LibraryCard = ({ library }: IWorkoutCardProps) => {
    return (
        <div>
            <Link href={'/'}

                className="overflow-hidden rounded-xl border border-[#2D313B] bg-[#0C0D10]"
            >

                {/* Image */}
                <div className="aspect-[1.8/1] w-full overflow-hidden">
                    <Image
                        src={library.image}
                        alt={library.name}
                        width={393}
                        height={192}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Card Content */}
                <div className="p-5">

                    {/* Muscle Groups */}
                    <div className="flex flex-wrap gap-2">
                        {library.muscleGroups.map((muscle: any) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#CCFF00] px-3 py-1 font-inter text-[10px] font-bold uppercase leading-none text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Name */}
                    <h3 className="mt-4 font-oswald text-lg font-bold uppercase leading-tight text-white">
                        {library.name}
                    </h3>

                    {/* Equipment */}
                    <p className="mt-1 font-inter text-xs text-[#9CA3AF]">
                        {library.equipment}
                    </p>

                    {/* Divider */}
                    <div className="my-4 h-px bg-[#1C1F26]" />

                    {/* Meta information */}
                    <div className="flex items-center gap-4 font-inter text-xs text-[#9CA3AF]">

                        {/* Duration */}
                        <div className="flex items-center gap-1.5">
                            <span>◷</span>
                            <span>{library.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-1.5">
                            <span>♥</span>
                            <span>{library.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1.5">
                            <span className="text-[#9CA3AF]">☆</span>
                            <span>{library.rating}</span>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default LibraryCard;