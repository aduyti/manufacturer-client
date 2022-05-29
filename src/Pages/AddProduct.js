import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const addClick = async data => {
        const bolt = {
            name: data.name,
            description: data.description,
            image: data.image,
            moq: parseInt(data.moq),
            Available: parseInt(data.Available),
            unitprice: parseFloat(data.unitprice)
        }
        await axios.post('https://mysterious-coast-30403.herokuapp.com/addbolt', bolt);
        // navigate('/dashboard/manageorders');


    }
    if (Object.keys(errors).length > 0) {
        toast.error("Require Each field");
    }
    return (
        <div className="px-8 md:px-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-8 mx-auto">
                <div className="card-body">
                    <h1 className="text-xl font-bold text-center text-primary">Add Product</h1>

                    <form onSubmit={handleSubmit(addClick)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bolt Name</span>
                            </label>
                            <input type="text" placeholder="Bolt Name"
                                {...register("name", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="Description"
                                {...register("description", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">MOQ</span>
                            </label>
                            <input type="number" placeholder="MOQ"
                                {...register("moq", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available</span>
                            </label>
                            <input type="number" placeholder="Available"
                                {...register("Available", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Unit Price</span>
                            </label>
                            <input type="number" placeholder="Unit Price"
                                {...register("unitprice", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image Link</span>
                            </label>
                            <input type="text" placeholder="Product Image Link"
                                {...register("image", { required: true })} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>        </div>
    );
};

export default AddProduct;