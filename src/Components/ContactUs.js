import React from 'react';

const ContactUs = () => {
    return (
        <div id="contact-us" className="hero mb-16 border-t-2">
            <div className="hero-content flex-col md:flex-row-reverse gap-x-24 w-full">
                <div className="text-center md:text-left">
                    <h1 className="text-5xl font-bold pb-6">Contact Us</h1>
                    <p className=""><span className="font-bold">Address: </span>12,Road 8, Bulga, Doga-12212</p>
                    <p className=""><span className="font-bold">Phone: </span>+00000000000</p>
                    <p className=""><span className="font-bold">Email: </span>info@thebolts.co</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-xl font-bold text-center text-primary">Write Us</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Query</span>
                            </label>
                            <textarea placeholder="Write your feelings." className="textarea textarea-bordered h-24" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;