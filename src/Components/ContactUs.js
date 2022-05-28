import React from 'react';

const ContactUs = () => {
    return (
        <div id="contact-us" class="hero mb-16 border-t-2">
            <div class="hero-content flex-col md:flex-row-reverse gap-x-24 w-full">
                <div class="text-center md:text-left">
                    <h1 class="text-5xl font-bold pb-6">Contact Us</h1>
                    <p class=""><span class="font-bold">Address: </span>12,Road 8, Bulga, Doga-12212</p>
                    <p class=""><span class="font-bold">Phone: </span>+00000000000</p>
                    <p class=""><span class="font-bold">Email: </span>info@thebolts.co</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 class="text-xl font-bold text-center text-primary">Write Us</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Query</span>
                            </label>
                            <textarea placeholder="Write your feelings." class="textarea textarea-bordered h-24" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;