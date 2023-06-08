/* eslint-disable react/prop-types */
// import React from 'react';

const ClassCard = ({ cLL }) => {
    console.log(cLL);
    const { image, name, instructor, available_seats, price } = cLL;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="pt-2">
                    <img src={image} alt="Shoes" className="rounded-xl h-[240px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p><span className="font-medium">Instructor:</span> {instructor}</p>
                    <div className="flex gap-10"><p><span className="font-medium">Available Seats:</span> {available_seats}</p>
                        <p><span className="font-medium">Price:</span> ${price}</p></div>
                    <div className="card-actions">
                        <button className="btn bg-[#59c6bc]">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;