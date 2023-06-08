// import React from 'react';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';

const MusicGroups = () => {
    return (
        <div className='bg-[#f7f7f7]'>
            <div className='max-w-6xl mx-auto mb-10'>
                <div className="text-center my-8 mt-12">
                    <h2 className="text-4xl font-medium pt-10"><span className="text-[#59c6bc]">Music</span> Groups</h2>
                    <p>For</p>
                </div>
                <div className='md:flex'>
                    <div className="card">
                        <figure className="px-6 pt-6">
                            <img src={service3} alt="Shoes" className="rounded-full h-[160px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Kids</h2>
                            <p>Our school is a solution for families who would like to expose their children to the world of music.</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure className="px-6 pt-6">
                            <img src={service2} alt="Shoes" className="rounded-full h-[160px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Teens</h2>
                            <p>Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music.</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure className="px-6 pt-6">
                            <img src={service1} alt="Shoes" className="rounded-full h-[160px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Adults</h2>
                            <p>We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors.</p>
                        </div>
                    </div>
                    <div className="card">
                        <figure className="px-6 pt-6">
                            <img src={service4} alt="Shoes" className="rounded-full h-[160px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Private lessons</h2>
                            <p>Private music lessons provide one-on-one attention, so teachers can focus on an individual student’s needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicGroups;