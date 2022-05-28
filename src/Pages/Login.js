import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin';

const Login = () => {
    return (
        <div className="px-8 md:px-20 h-screen">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Login</h3>
            <div className="flex justify-center">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form >
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <Link to="/signup" class="label-text-alt link link-hover">Sign Up</Link>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;