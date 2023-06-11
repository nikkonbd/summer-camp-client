/* eslint-disable react/prop-types */
// import React from 'react';

const InstructorsCard = ({ ins }) => {
    const { image, name, email } = ins;

    const handleSeeClass = (id) => {
        console.log(id);
    }
    return (
        <div className="">
            <div className="card border">
                <figure className="px-6 pt-6">
                    <img src={image} alt="Shoes" className="rounded-2xl h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <div className="card-actions">
                        <button onClick={() => handleSeeClass(ins._id)} className="btn bg-[#59c6bc]">See Classes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;