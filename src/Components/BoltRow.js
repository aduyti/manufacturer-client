import React from 'react';
import { useNavigate } from 'react-router-dom';

const BoltRow = ({ bolt }) => {
    const { name, image, moq, Available, _id } = bolt;
    const navigate = useNavigate();
    const deleteClick = id => {
        console.log("first")
    }
    return (
        <tr>
            <th><img src={image} alt={name} className="w-20" /></th>
            <th>{name}</th>
            <td>{moq}</td>
            <td>{Available}</td>
            <td>
                <div className="flex flex-col justify-center items-center">

                    <button className="block" onClick={() => navigate(`/dashboard/manageproduct/${_id}`)}>
                        <span className="badge ">Manage</span></button>
                    <label for={`del-bolt-${_id}`} >
                        <span className="badge badge-warning">Delete</span>
                    </label>
                </div>


                <input type="checkbox" id={`del-bolt-${_id}`} class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for={`del-bolt-${_id}`} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg">Delete {name}?</h3>
                        <div class="modal-action">
                            <label for={`del-bolt-${_id}`} class="btn" onClick={() => deleteClick(_id)}>Yes</label>
                        </div>
                    </div>
                </div>


            </td>
        </tr >
    );
};

export default BoltRow;