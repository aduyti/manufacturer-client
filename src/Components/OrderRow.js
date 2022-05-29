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
        const Available = product.Available + quantity;
        axios.put(`https://mysterious-coast-30403.herokuapp.com/boltup/${product._id}`, { Available });
        orderStatus("canceled", id);
        setStatus("canceled");
        window.location.reload();

    }
    const shipClick = id => {
        orderStatus("shipped", id);
        setStatus("shipped");
        window.location.reload();

    }
    return (
        <tr>
            <th>
                <div className="flex flex-col justify-center items-center">
                    <div>{boltName}</div>
                    {order?.trnxId && <div className="text-sm text-red-600">{order?.trnxId}</div>}
                </div>
            </th>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                <div className="flex flex-col justify-center items-center">
                    <p><span className="badge">{status}</span></p>
                    {
                        status === "placed" && <>
                            <label for={`cncl-odr-${_id}`} >
                                <span className="badge badge-error">Cancel</span>
                            </label>
                            {acc === "user" &&
                                <button className="block" onClick={() => navigate(`/dashboard/order/${_id}`)}>
                                    <span className="badge badge-warning">Pay Now</span></button>

                            }</>
                    }
                    {
                        status === "paid" && acc === "admin" &&
                        <button className="block" onClick={() => shipClick(_id)}>
                            <span className="badge badge-info">Ship</span></button>
                    }
                </div>

                <input type="checkbox" id={`cncl-odr-${_id}`} class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for={`cncl-odr-${_id}`} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg">Cancel This Order?</h3>
                        <div class="modal-action">
                            <label for={`cncl-odr-${_id}`} class="btn" onClick={() => cancelClick(_id)}>Yes</label>
                        </div>
                    </div>
                </div>



            </td>
        </tr >
    );
};

export default OrderRow;