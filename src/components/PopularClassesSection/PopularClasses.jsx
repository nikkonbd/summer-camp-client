/* eslint-disable no-undef */
// import React from 'react';

import useClasses from "../../hooks/useClasses";
import PopularCard from "./PopularCard";

const PopularClasses = () => {
    const [classes] = useClasses();

    const popular = classes.filter(item => item.category === 'popular');
    // console.log(popular);

    return (
        <div className="max-w-6xl mx-auto mb-8">
            <div className="text-center my-8">
                <h2 className="text-4xl font-semibold"><span className="text-[#59c6bc]">Popular Classes</span> Section</h2>
                <p>Popular Section</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    popular.map(item => <PopularCard key={item._id} item={item}></PopularCard>)
                }
            </div>

        </div>
    );
};

export default PopularClasses;