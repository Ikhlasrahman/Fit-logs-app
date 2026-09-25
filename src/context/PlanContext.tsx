"use client";
import { createContext, ReactNode, useState } from "react";
import { IWorkout } from "@/types/library.type";

interface PlanContextType  {
    plan: IWorkout[];
    setPlan: React.Dispatch<React.SetStateAction<[]>>;
    saved: IWorkout[];
    setSaved: React.Dispatch<React.SetStateAction<[]>>
}
export const PlanContext = createContext<PlanContextType>({
    plan: [],
    setPlan: ()=>{},
    saved: [],
    setSaved: ()=>{}
});

const PlanProvider = ({ children }: { children: ReactNode }) => {

    const [plan, setPlan] = useState<IWorkout[]>([])
    const [saved, setSaved] = useState<IWorkout[]>([])

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