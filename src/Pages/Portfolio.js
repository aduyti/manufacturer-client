import React from 'react';

const Portfolio = () => {
    return (
        <div className="px-8 md:px-20">
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">I'm Anirudhya Duyti</h1>
                        <p className="py-6">I am currently working on becoming a Web Developer. I am practicing with MERN Stack. And I'm loving it, especially the Tailwind CSS and MongoDB. Hope I will get a decent job in near future. I completed My Bachelor's Degree. You can contact me through anirudhyaduyti@gmail.com</p>

                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 w-full">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">The Bolts Manufacturing Co.</h2>
                        <p>A web site for manufacturer. Can sell goods in bulk.</p>
                        <a className="text-primary" href="https://the-bolts.web.app/" target="_blank" rel="noreferrer">LINK</a>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Laptop Home</h2>
                        <p>A inventory management system. Warehouse for laptops. can do stocking and shipping</p>
                        <a className="text-primary" href="https://inventory-management-edcb6.web.app/" target="_blank" rel="noreferrer">LINK</a>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Redmi Buds 3 Pro Review Site </h2>
                        <p>Can get reviews on specific product</p>
                        <a className="text-primary" href="https://redmi-buds3-review-ad.netlify.app/" target="_blank" rel="noreferrer">LINK</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;