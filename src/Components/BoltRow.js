import axios from 'axios';
import React from 'react';

const BoltRow = ({ bolt }) => {
    const { name, image, moq, Available, _id } = bolt;
    const deleteClick = id => {
        axios.delete(`https://mysterious-coast-30403.herokuapp.com/bolt/${id}`)
        window.location.reload();
    }
    return (
        <tr>
            <th><img src={image} alt={name} className="w-20" /></th>
            <th>{name}</th>
            <td>{moq}</td>
            <td>{Available}</td>
            <td>
                <label for={`del-bolt-${_id}`} >
                    <span className="badge badge-warning">Delete</span>
                </label>


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