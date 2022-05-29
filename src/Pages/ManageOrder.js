import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderRow from '../Components/OrderRow';

const ManageOrder = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        axios.get(`https://mysterious-coast-30403.herokuapp.com/allorders`)
            .then(res => setOrder(res.data))
    }, [])

    return (
        <div className="px-8 md:px-20 w-full">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Manage All Orders</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Bolt</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => <OrderRow key={order._id} order={order} acc="admin" />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;