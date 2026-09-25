"use client";

import { PlanContext } from "@/context/PlanContext";
import { useContext } from "react";

const PlanPages = () => {

    const { plan, saved } = useContext(PlanContext)
    console.log(plan, saved, 'Plan', 'Saved')
    return (

        <div>
            <h2>Plan Pages</h2>
        </div>
    );
};

export default PlanPages;