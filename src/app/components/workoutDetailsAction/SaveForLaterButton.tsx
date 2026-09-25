"use client";

import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/library.type";
import { useContext } from "react";
import { CiBookmark } from "react-icons/ci";

interface AddSavePlanButtonProps {
    workout: IWorkout;
}

const SaveForLaterButton = ({ workout }: AddSavePlanButtonProps) => {
    const { saved, setSaved } = useContext(PlanContext);


    const handlesetSaved = () => {
        setSaved([...saved, workout]);
        alert(`You have saved "${workout.name}"`)
    };

    return (
        <button
            onClick={handlesetSaved}
            className="flex items-center gap-2 rounded-xl border border-gray-700 px-6 py-3 text-sm font-medium text-gray-200">
            <CiBookmark className="text-lg" />
            Save for later
        </button>
    );
};

export default SaveForLaterButton;