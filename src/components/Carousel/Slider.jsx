// import React from 'react';
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full justify-center">
                    <img src={slider1} className="w-full" />
                    <div className="absolute flex gap-4 top-0 items-center bottom-0">
                        <div className='space-y-5 pl-20 text-center'>
                            <h2 className='text-6xl font-semibold text-white'>Music For Everyone!</h2>
                            <p className='text-white'>Awaken Possibility.</p>
                            <button className="btn bg-[#59c6bc] text-white mr-5">Start Learning</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn">❮</a>
                        <a href="#slide2" className="btn">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full justify-center">
                    <img src={slider2} className="w-full" />
                    <div className="absolute flex gap-4 top-0 items-center bottom-0">
                        <div className='space-y-5 pl-20 text-center'>
                            <h2 className='text-6xl font-semibold text-white'>Music Is Your World!</h2>
                            <p className='text-white'>Dont Miss A Chance.</p>
                            <button className="btn bg-[#59c6bc] mr-5">Start Learning</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn">❮</a>
                        <a href="#slide3" className="btn">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full justify-center">
                    <img src={slider3} className="w-full" />
                    <div className="absolute flex gap-4 top-0 items-center bottom-0">
                        <div className='space-y-5 pl-20 text-center'>
                            <h2 className='text-6xl font-semibold text-white'>Start With A Note!</h2>
                            <p className='text-white'>Awaken Possibility.</p>
                            <button className="btn bg-[#59c6bc] text-white mr-5">Start Learning</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn">❮</a>
                        <a href="#slide1" className="btn">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;