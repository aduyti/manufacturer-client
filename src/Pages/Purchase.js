import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import useProduct from '../Utilities/Hooks/useProduct';

const Purchase = () => {
    const { id } = useParams();
    const [bolt] = useProduct(id);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const order = (data) => {
        console.log(data.quantity)
    }
    return (
        <div className="px-8 md:px-20">
            <div className="md:m-10 bg-base-100 rounded-xl p-4 md:p-8 text-center">
                {
                    bolt._id ?
                        <>
                            <div className="flex justify-around items-center flex-col-reverse sm:flex-row ">
                                <div>
                                    <h2 className="text-3xl font-bold pb-2">{bolt.name}</h2>
                                    <h2 class="font-bold">Unit Price: ${bolt.unitprice}</h2>
                                    <p>Description: {bolt.description}</p>
                                    <div className="font-semibold text-slate-500">
                                        <h2>MOQ: {bolt.moq}</h2>
                                        <h2>In Stock: {bolt.Available}</h2>
                                    </div>
                                </div>
                                <img src={bolt.image} alt={bolt.name} className="w-48 border rounded-lg" />
                            </div>
                            <form class="form-control justify-center my-8" onSubmit={handleSubmit(order)}>
                                <div class="input-group justify-center">
                                    <input type="number"
                                        {...register("quantity",
                                            { required: true, max: bolt.Available, min: bolt.moq })}
                                        placeholder="Enter Order Amount" defaultValue={bolt.moq}
                                        class="input input-bordered border-primary" />
                                    <button class="btn btn-primary">
                                        Confirm Order
                                    </button>
                                </div>
                            </form>
                        </> :
                        <>
                            <h2 className="text-3xl font-bold text-error pb-8">Bolt Not Found</h2>
                            <Spinner />
                            <Link className="text-accent text-xl font-bold block mt-4" to="/allproducts">View All Products <ArrowRightIcon className="w-6 h-6 inline" /></Link>

                        </>
                }
            </div>
        </div>
    );
};

export default Purchase;