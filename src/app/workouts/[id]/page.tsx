import React from 'react';

interface IWorkOutDetailspageProps{
params:Promise<{
    id:string;
}>;
}
const WorkOutDetailspage = async ({params}:IWorkOutDetailspageProps) => {
    
    const {id} = await params;
    console.log(params)
    return (
        <div>
            
        </div>
    );
};

export default WorkOutDetailspage;