/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { image, name, instructor, available_seats, price, _id } = item;

    const handleSelectClass = item => {
        console.log(item);
        if (user && user.email) {
            const selectClass = { classId: _id, image, name, instructor, available_seats, price, email: user.email }
            // console.log(selectClass);
            fetch('https://summer-camp-school-server-nikkon1998-gmailcom.vercel.app/selects', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Class Selected SuccessFully')
                    }
                })
        }
        else {
            alert('Please Login To Selected Class')
            navigate('/login');
        }
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded pt-3 h-[240px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p><span className="font-medium">Instructor:</span> {instructor}</p>
                    <div className="flex gap-10"><p><span className="font-medium">Available Seats:</span> {available_seats}</p>
                        <p><span className="font-medium">Price:</span> ${price}</p></div>
                    <div className="card-actions">
                        <button onClick={() => handleSelectClass(item)} className="btn bg-[#59c6bc]">Select Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;