import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin';
import Spinner from '../Components/Spinner';
import getjwt from '../Utilities/Auth/getjwt';
import auth from '../Utilities/firebase.init';

const Login = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    let location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        logUser,
        logLoading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const loginClick = async (data) => {
        await signInWithEmailAndPassword(data.logEmail, data.logPass);
        getjwt(data.logEmail);
    }
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Spinner />;
    }
    if (user || logUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className="px-8 md:px-20 h-screen">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Login</h3>
            {(logLoading) && <Spinner />}
            {(error) && <p className="pl-5 text-red-500 text-sm text-center">{error.message}</p>}
            <div className="flex justify-center">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(loginClick)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email
                                        {errors.logEmail?.type === "pattern" && (<span className="pl-5 text-red-600/75 text-xs">Enter a valid email</span>)}
                                        {errors.logEmail?.type === "required" && (<span className="pl-5 text-red-600/75 text-xs">Email required</span>)}
                                    </span>
                                </label>
                                <input type="text"
                                    {...register("logEmail",
                                        { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                    placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password
                                        {errors.logPass?.type === "required" && (<span className="pl-5 text-red-600/75 text-xs">Password required</span>)}
                                        {errors.logPass?.type === "minLength" && (<span className="pl-5 text-red-600/75 text-xs">At least 6 characters</span>)}
                                    </span>
                                </label>
                                <input type="password"
                                    {...register("logPass", { required: true, minLength: 6 })}
                                    placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/signup" className="label-text-alt link link-hover">Sign Up</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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