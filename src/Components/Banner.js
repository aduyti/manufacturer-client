import React from 'react';

const Banner = () => {
    return (
        <div className="hero mb-16">
            <div className="hero-content flex-col md:flex-row">
                <img src="https://i.ibb.co/sjmGkHf/Banner.jpg"
                    className="max-w-sm rounded-xl shadow-2xl"
                />
                <div className="pt-14 md:pt-0 md:px-20">
                    <h1 className="text-4xl sm:text-5xl font-bold"><span className="text-primary">The Bolts </span>Manufacturing</h1>
                    <p className="py-6">We offers a wide assortment of bolts as per our valuable customers' requirements.</p>
                    <a href="#contact-us" className="btn btn-primary">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;