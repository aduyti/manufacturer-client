import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import getjwt from '../Utilities/Auth/getjwt';
import addUserDB from '../Utilities/DB/addUserDB';
import auth from '../Utilities/firebase.init';
import Spinner from './Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        addUserDB(user.user.displayName, user.user.email);
        getjwt(user.user.email);
        navigate(from, { replace: true });
    }
    return (
        <div className="form-control mt-6">
            {loading && <Spinner />}
            {error && <p className="text-red-500 text-xs">{error.message}</p>}
            <button className="btn btn-outline btn-primary" onClick={async () => await signInWithGoogle()}>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;