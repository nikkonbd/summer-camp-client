// import React from 'react';

import useClasses from "../../hooks/useClasses";

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
                    popular.map(popu => <span key={popu._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-6 pt-6">
                                <img src={popu.image} alt="Shoes" className="rounded-xl h-[240px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{popu.name}</h2>
                                <p>Students: {popu.student}</p>
                                <div className="card-actions">
                                    <button className="btn bg-[#59c6bc]">Select</button>
                                </div>
                            </div>
                        </div>
                    </span>)
                }
            </div>

        </div>
    );
};

export default PopularClasses;