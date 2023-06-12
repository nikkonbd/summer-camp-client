/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const InstructorsCard = ({ ins }) => {
    const { image, name, email, _id } = ins;

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
                        <button className="btn bg-[#59c6bc]"><Link to={`/seeClass/${_id}`}>See Classes</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;