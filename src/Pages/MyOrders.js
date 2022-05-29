import React from 'react';
import OrderRow from '../Components/OrderRow';
import useOrdersEmail from '../Utilities/Hooks/useOrdersEmail';
import useUser from '../Utilities/Hooks/useUser';

const MyOrders = () => {
    const [user] = useUser();
    const [orders] = useOrdersEmail(user.email);
    return (
        <div className="px-8 md:px-20 w-full">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">My Orders</h3>

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
                            orders.map((order) => <OrderRow key={order._id} order={order} acc="user" />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;