"use client";

import { PlanContext } from "@/context/PlanContext";
import { useContext } from "react";

const PlanPages = () => {

    const { plan } = useContext(PlanContext)
    console.log(plan)
    return (

        <div>
            <h2>Plan Pages</h2>
        </div>
    );
};

export default PlanPages;