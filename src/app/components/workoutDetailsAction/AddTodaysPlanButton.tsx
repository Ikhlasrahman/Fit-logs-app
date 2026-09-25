"use client";

import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/library.type";
import { useContext } from "react";
import { CiCalendar } from "react-icons/ci";
import { toast } from "react-toastify";

interface AddTodaysPlanButtonProps {
    workout: IWorkout;
}

const AddTodaysPlanButton = ({ workout, }: AddTodaysPlanButtonProps) => {
    const { plan, setPlan } = useContext(PlanContext);


    const handlesetPlan = () => {
        setPlan([...plan, workout]);
        toast.success(`You have add "${workout.name}"`)
    };

    return (
        <button
            onClick={handlesetPlan}
            className="flex items-center gap-2 rounded-xl bg-[#CCFF00] px-6 py-3 text-sm font-semibold text-neutral-900"
        >
            <CiCalendar className="text-lg" />
            Add today's plan
        </button>
    );
};

export default AddTodaysPlanButton;