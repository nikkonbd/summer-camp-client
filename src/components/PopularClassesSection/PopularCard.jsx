/* eslint-disable react/prop-types */
// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const PopularCard = ({ item }) => {
    const { _id, name, image, student, instructor, available_seats, price } = item;

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSelectClass = item => {
        console.log(item);
        if (user && user.email) {
            const selectClass = { classId: _id, image, name, instructor, available_seats, price, email: user.email }
            console.log(selectClass);
            fetch('http://localhost:5000/selects', {
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
                <figure className="px-6 pt-6">
                    <img src={image} alt="Shoes" className="rounded-xl h-[240px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Students: {student}</p>
                    <div className="card-actions">
                        <button onClick={() => handleSelectClass(item)} className="btn bg-[#59c6bc]">Select Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;