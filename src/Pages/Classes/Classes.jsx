// import React from 'react';

import ClassCard from "../../components/ClassCard/ClassCard";
import useClasses from "../../hooks/useClasses";

const Classes = () => {

    const [classes] = useClasses([]);
    // console.log(classes);
    return (
        <div>
            <div className="hero h-[300px] hero-section">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Classes Section!</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10 mt-10">
                {
                    classes.map(cLL => <ClassCard key={cLL._id} cLL={cLL}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;