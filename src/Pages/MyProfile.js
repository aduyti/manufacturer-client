import React from 'react';
import { useForm } from 'react-hook-form';
import updateUser from '../Utilities/DB/updateUser';
import useUser from '../Utilities/Hooks/useUser';

const MyProfile = () => {
    const [user, setUser] = useUser();
    const { register, handleSubmit } = useForm();
    const profileUpdate = data => {
        const newU = data;
        newU.name = user.name;
        newU.email = user.email;
        setUser(newU);
        updateUser(newU, user._id);
        window.location.reload();
    }

    return (
        <div className="px-8 md:px-20">
            <h1 className="text-5xl text-center text-primary font bold mb-4">My Profile</h1>
            <div className="flex flex-wrap gap-5 justify-between items-center ">
                <div className="mx-auto">
                    <h2 className="text-2xl font-bold">Name: {user.name}</h2>
                    <h2 className="text-2xl font-bold">email: {user.email}</h2>
                    {user?.address && <h2 className="text-2xl font-bold">Address: {user.address}</h2>}
                    {user?.phone && <h2 className="text-2xl font-bold">phone: {user.phone}</h2>}
                    {user?.education && <h2 className="text-2xl font-bold">education: {user.education}</h2>}
                    {user?.linkedin && <a href={user.linkedin} target="_blank" className="text-2xl text-primary" rel="noreferrer">LinkedIn</a>}

                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-8 mx-auto">
                    <div class="card-body">
                        <h1 class="text-xl font-bold text-center text-primary">Update Profile</h1>

                        <form onSubmit={handleSubmit(profileUpdate)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="Address"
                                    {...register("address")} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone"
                                    {...register("phone")} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Education</span>
                                </label>
                                <input type="text" placeholder="Education"
                                    {...register("education")} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">LinkedIn Profile Link</span>
                                </label>
                                <input type="text" placeholder="LinkedIn Profile Link"
                                    {...register("linkedin")} class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;