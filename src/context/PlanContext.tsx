"use client";
import { createContext, ReactNode, useState } from "react";
import { IWorkout } from "@/types/library.type";

export const PlanContext = createContext({});


type PlanContextType = {
    plan: IWorkout[];
    setPlan: React.Dispatch<React.SetStateAction<[]>>;
    saved: IWorkout[];
    setSaved: React.Dispatch<React.SetStateAction<[]>>
}

const PlanProvider = ({ children }: { children: ReactNode }) => {

    const [plan, setPlan] = useState([])
    const [saved, setSaved] = useState([])

    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved
    };
    return (
        <PlanContext.Provider value={sharedData}>
            {children}
        </PlanContext.Provider>
    );
};

export default PlanProvider;