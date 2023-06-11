// import React from 'react';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // e.target.reset();
        // console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user updated');
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    alert('User Create SuccessFully');
                                    reset();
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="">
            <div className="max-w-6xl mx-auto">
                <div className="hero min-h-screen mb-12">
                    <div className="hero-content flex-col">
                        <div>
                            <img className="w-[200px]" src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" alt="" />
                        </div>
                        <div className="card shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <h1 className="text-2xl font-bold">SignUp now!</h1>
                                <div className="flex gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="your name" {...register("name", { required: true })} className="input input-bordered" />
                                        {errors.name && <span>Name is Required!</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                        {errors.email && <span>Email is Required!</span>}
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} className="input input-bordered" />
                                        {errors.password?.type === 'minLength' && <p className='text-red-600'>Password Must be 6 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className='text-red-600'>Password Must be one lowercase, one uppercase, <br /> one number and one special characters</p>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" placeholder="confirm password" {...register("confirmPassword")} className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="img" placeholder="photo url" {...register("photo")} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <select {...register("gender")} className="input input-bordered">
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#59c6bc]"><input className="text-xl" type="submit" value="SignUp" /></button>
                                </div>
                                <label className="label">
                                    <a className="label-text-alt">Already Have an Account?  <Link to={'/login'}> Login Now</Link></a>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;