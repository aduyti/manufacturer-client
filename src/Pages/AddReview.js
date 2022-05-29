import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useUser from '../Utilities/Hooks/useUser';

const AddReview = () => {
    const [user] = useUser();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const reviewConfirm = async data => {
        const review = {};
        review.text = data.text;
        review.rating = parseInt(data.rating);
        review.uname = user.name;
        review.uemail = user.email;
        await axios.post('http://localhost:5555/addreview', review);
        navigate('/');
    }

    return (
        <div className="px-8 md:px-20 w-full">
            <h1 class="text-xl font-bold text-center text-primary">Add A Review</h1>
            <div class="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 mt-8">
                <div class="card-body">

                    <form onSubmit={handleSubmit(reviewConfirm)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">rating</span>
                            </label>
                            <select placeholder="rating"
                                {...register("rating", { required: true })} class="input input-bordered">
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Review</span>
                            </label>
                            <textarea type="textarea" placeholder="Write your review"
                                {...register("text", { required: true })} class="textarea textarea-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddReview;