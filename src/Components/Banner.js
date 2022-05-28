import React from 'react';

const Banner = () => {
    return (
        <div class="hero mb-16">
            <div class="hero-content flex-col md:flex-row">
                <img src="https://i.ibb.co/sjmGkHf/Banner.jpg"
                    class="max-w-sm rounded-xl shadow-2xl"
                />
                <div className="pt-14 md:pt-0 md:px-20">
                    <h1 class="text-4xl sm:text-5xl font-bold"><span className="text-primary">The Bolts </span>Manufacturing</h1>
                    <p class="py-6">We offers a wide assortment of bolts as per our valuable customers' requirements.</p>
                    <a href="#contact-us" class="btn btn-primary">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;