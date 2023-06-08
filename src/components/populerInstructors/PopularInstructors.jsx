// import React from 'react';

import useInstructors from "../../hooks/useInstructors";


const PopularInstructors = () => {
    const [instructors] = useInstructors();
    // console.log(instructors);
    const instructor = instructors.filter(item => item.category === 'popular');
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center my-8">
                <h2 className="text-4xl font-semibold"><span className="text-[#59c6bc]">Popular Instructors</span> Section</h2>
                <p>Popular Section</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {
                    instructor.map(ins => <span
                        key={ins._id}>
                        <div className="card border">
                            <figure className="px-6 pt-6">
                                <img src={ins.image} alt="Shoes" className="rounded-2xl h-[200px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{ins.name}</h2>
                                <p>Email: {ins.email}</p>
                                <div className="card-actions">
                                    <button className="btn bg-[#59c6bc]">See Classes</button>
                                </div>
                            </div>
                        </div>
                    </span>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;