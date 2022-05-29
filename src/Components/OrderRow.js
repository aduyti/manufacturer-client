import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRow = ({ order, acc }) => {
    const { _id, boltName, quantity, price, status } = order;
    const navigate = useNavigate();
    return (
        <tr>
            <th>{boltName}</th>
            <td>{quantity}</td>
            <td>{price}</td>
            <td className="">
                {
                    status === "placed" &&
                    <div className="flex flex-col justify-center items-center">
                        <p><span class="badge">Placed</span></p>
                        {acc === "user" ?
                            <button className="block" onClick={() => navigate(`/order/${_id}`)}>
                                <span class="badge badge-success">Pay Now</span></button> :
                            <button className="block" onClick={() => navigate(`/order/${_id}`)}>
                                <span class="badge badge-success">Pay Now</span></button>
                        }
                    </div>
                }
            </td>
        </tr>
    );
};

export default OrderRow;