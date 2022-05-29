import { ArrowRightIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../Components/Spinner';
import setOrder from '../Utilities/DB/setOrder';
import useProduct from '../Utilities/Hooks/useProduct';
import useUser from '../Utilities/Hooks/useUser';

const Purchase = () => {
    const [user] = useUser();
    const { id } = useParams();
    const [bolt] = useProduct(id);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [available, setAvailable] = useState(0);
    const [newOrder, setNewOrder] = useState({});
    useEffect(() => {
        setAvailable(bolt.Available);
    }, [bolt])
    const orderClick = async (data) => {
        const quantity = parseInt(data.quantity);
        setAvailable(available - quantity);
        const order = {
            boltName: bolt.name,
            boltID: bolt._id,
            quantity: quantity,
            status: "placed",
            price: parseFloat((bolt.unitprice * quantity).toFixed(2)),
            uEmail: user.email
        };
        setNewOrder(order);
        setOrder(order, (available - quantity));
        document.getElementById("order-modal").click();

    }
    errors.quantity?.type === "max" && toast.error("Exceeded Available Quantity ");
    errors.quantity?.type === "min" && toast.error(`MOQ is ${bolt.moq}`);
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
                                        <h2>In Stock: {available}</h2>
                                    </div>
                                </div>
                                <img src={bolt.image} alt={bolt.name} className="w-48 border rounded-lg" />
                            </div>
                            <form class="form-control justify-center my-8" onSubmit={handleSubmit(orderClick)}>
                                {errors.quantity?.type === "max" && (<span className="pl-5 pb-3 text-red-500 text-xs">Exceeded Available Quantity</span>)}
                                {errors.quantity?.type === "min" && (<span className="pl-5 pb-3 text-red-500 text-xs">MOQ is {bolt.moq}</span>)}
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


                            <label id="order-summary" for="order-modal" class="btn modal-button hidden">open modal</label>

                            <input type="checkbox" id="order-modal" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box relative">
                                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 class="text-lg font-bold">Oder Summary</h3>
                                    <p class="py-4">Product Name: {newOrder.boltName}</p>
                                    <p class="py-4">Product description: {bolt.description}</p>
                                    <p class="py-4">Order Quantity: {newOrder.quantity}</p>
                                    <p class="py-4">Total Amount: ${newOrder.price}</p>
                                    <div class="modal-action">
                                        <label onClick={() => navigate(`/dashboard/myorders`)} class="btn btn-primary">View Orders</label>
                                    </div>
                                </div>
                            </div>
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