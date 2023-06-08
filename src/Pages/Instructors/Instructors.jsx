// import React from 'react';

// style = "background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
import useInstructors from '../../hooks/useInstructors';
import './Instructors.css'
import InstructorsCard from './InstructorsCard';



const Instructors = () => {

    const [instructors] = useInstructors();
    // console.log(instructors.length);
    return (
        <div>
            <div className="hero h-[300px] hero-section">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Instructors Section!</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in.</p>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-8 mb-6'>
                {
                    instructors.map(ins => <InstructorsCard
                        key={ins._id}
                        ins={ins}
                    ></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;