import React, { useEffect, useState } from 'react';
import axios from "axios";

import { useNavigate, useParams } from 'react-router-dom';
import orderStatus from '../Utilities/DB/orderStatus';

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://mysterious-coast-30403.herokuapp.com/order/${id}`)
            .then(res => setOrder(res.data))
    }, [id])

    const payHandle = data => {
        orderStatus("paid", order._id);
        navigate('/dashboard/myorders');
    }


    return (
        <div className="px-8 md:px-20">
            <h1 className="text-5xl text-center text-primary font bold mb-4">Pay your Order</h1>
            <div className="flex flex-wrap gap-5 justify-between items-center ">
                <div className="mx-auto">
                    <h2 className="text-2xl font-bold">Name: {order.boltName}</h2>
                    <h2 className="text-2xl font-bold">Quantity: {order.quantity}</h2>
                    <h2 className="text-2xl font-bold">Total payable: {order.price}</h2>
                    <h2 className="text-2xl font-bold">Status: {order.status}</h2>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-8 mx-auto">
                    <div className="card-body">
                        <h1 className="text-xl font-bold text-center text-primary">Pay Here</h1>

                        <p> Pay {order.price}USD to confirm your order</p>
                        <button class={`btn btn-primary ${order.status !== "placed" && "btn-disabled"}`} onClick={payHandle}>Pay</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;