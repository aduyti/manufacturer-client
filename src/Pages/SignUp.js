import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Components/SocialLogin';
import Spinner from '../Components/Spinner';
import getjwt from '../Utilities/Auth/getjwt';
import addUserDB from '../Utilities/DB/addUserDB';
import auth from '../Utilities/firebase.init';

const SignUp = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    let location = useLocation();
    const [uName, setName] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [
        createUserWithEmailAndPassword,
        createUser,
        createUserLoading,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const signUpClick = async (data) => {
        setName(data.name);
        await createUserWithEmailAndPassword(data.signEmail, data.signPass);
        await updateProfile({ displayName: data.name });

    }
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Spinner />;
    }

    if (user) {
        addUserDB(uName, user.email);
        getjwt(user.email);
        navigate(from, { replace: true });
    }
    return (
        <div className="px-8 md:px-20 h-screen">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Sign Up</h3>
            {(createUserLoading || updating) && <Spinner />}
            {(createUserError || error) && <p className="pl-5 text-red-500 text-xm text-center">{createUserError.message || error.message}</p>}
            <div className="flex justify-center">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(signUpClick)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name
                                        {errors.name?.type === "required" && (<span className="pl-5 text-red-600/75 text-xs">Name Required</span>)}
                                    </span>
                                </label>
                                <input type="text" {...register("name", { required: true })}
                                    placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email
                                        {errors.signEmail?.type === "pattern" && (<span className="pl-5 text-red-600/75 text-xs">Enter a valid email</span>)}
                                        {errors.signEmail?.type === "required" && (<span className="pl-5 text-red-600/75 text-xs">Email required</span>)}
                                    </span>
                                </label>
                                <input type="text"
                                    {...register("signEmail",
                                        { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                    placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password
                                        {errors.signPass?.type === "required" && (<span className="pl-5 text-red-600/75 text-xs">Password required</span>)}
                                        {errors.signPass?.type === "minLength" && (<span className="pl-5 text-red-600/75 text-xs">At least 6 characters</span>)}
                                    </span>
                                </label>
                                <input type="password"
                                    {...register("signPass", { required: true, minLength: 6 })}
                                    placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <Link to="/login" class="label-text-alt link link-hover">Login</Link>
                                </label>
                            </div>
                            <div class="form-control mt-4">
                                <button class="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;