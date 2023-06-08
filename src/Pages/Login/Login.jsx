// import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="bg-base-200">
            <div className="max-w-6xl mx-auto">
                <div className="hero min-h-screen mb-12">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div>
                            <img className="w-[600px]" src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <h1 className="text-2xl font-bold">Login now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                    {errors.email && <span>Email is Required!</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" {...register("password")} className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#59c6bc]"><input className="text-xl" type="submit" value="Login" /></button>

                                </div>
                                <label className="label">
                                    <a className="label-text-alt">Dont Have an Account?  <Link to={'/register'}> Register Now</Link></a>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;