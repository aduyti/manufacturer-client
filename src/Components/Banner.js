import React from 'react';

const Banner = () => {
    return (
        <div class="hero h-96 bg-base-200 mb-24">
            <div class="hero-content flex-col lg:flex-row md:px-20">
                <img src="https://i.ibb.co/sjmGkHf/Banner.jpg"
                    class="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="md:px-20">
                    <h1 class="text-5xl font-bold"><span className="text-primary">The Bolts </span>Manufacturing</h1>
                    <p class="py-6">We offers a wide assortment of bolts as per our valuable customers' requirements.</p>
                    <a href="#contact-us" class="btn btn-primary">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;