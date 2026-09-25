"use client";
import { createContext, ReactNode, useState } from "react";

export const PlanContext = createContext({});


type PlanContextType = {
    plan: [];
    setPlan: React.Dispatch<React.SetStateAction<[]>>;
    saved: [];
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