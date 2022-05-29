import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import orderStatus from '../Utilities/DB/orderStatus';
import useProduct from '../Utilities/Hooks/useProduct';

const OrderRow = ({ order, acc }) => {
    const { _id, boltName, quantity, price } = order;
    const navigate = useNavigate();
    const [status, setStatus] = useState(order.status);
    const [product] = useProduct(order.boltID);

    const cancelClick = id => {
        document.getElementById('cancel').click();
        const Available = product.Available + quantity;
        axios.put(`http://localhost:5555/boltup/${product._id}`, { Available });
        orderStatus("canceled", id);
        setStatus("canceled");
        // window.location.reload();

    }
    const shipClick = id => {
        orderStatus("shipped", id);
        setStatus("shipped");
        window.location.reload();

    }
    return (
        <tr>
            <th>{boltName}</th>
            <td>{quantity}</td>
            <td>{price}</td>
            <td className="">
                <div className="flex flex-col justify-center items-center">
                    <p><span class="badge">{status}</span></p>
                    {
                        status === "placed" && <> < button for="cancel-modal" className="block" onClick={() => cancelClick(_id)}>
                            <span class="badge badge-error">Cancel</span></button>
                            {acc === "user" &&
                                <button className="block" onClick={() => navigate(`/dashboard/order/${_id}`)}>
                                    <span class="badge badge-warning">Pay Now</span></button>

                            }</>
                    }
                    {
                        status === "paid" && acc === "admin" &&
                        <button className="block" onClick={() => shipClick(_id)}>
                            <span class="badge badge-info">Ship</span></button>
                    }
                </div>


            </td>
        </tr >
    );
};

export default OrderRow;