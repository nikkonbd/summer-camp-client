// import React from 'react';

import { Link } from "react-router-dom";
import useSelects from "../../hooks/useSelects";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";

const SelectClass = () => {

    const [select, refetch] = useSelects();
    console.log(select);
    const total = select.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selects/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <div className="text-center">
                <h2 className="text-4xl font-medium">My Selected Class</h2>
                <p>All Selected Class Here</p>
            </div>
            <div>
                <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                    <h3 className="text-2xl">Total Items: {select.length}</h3>
                    <h3 className="text-2xl">Total Price: ${total}</h3>
                    <Link>
                        <button className="btn bg-[#59c6bc] btn-sm">GO To PAY</button>
                    </Link>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                select.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.instructor}</td>
                                    <td className="">${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectClass;