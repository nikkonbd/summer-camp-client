// import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/404.gif'

const PageNotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <img className='w-[500px]' src={notFound} alt="" />
                <div className='text-center'>
                    <h2 className='text-2xl'>Page Not Found</h2>
                    <button className='btn mt-4'><Link to={'/'}>Go To HomePage</Link></button>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;