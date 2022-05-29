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
                <label htmlFor={`del-bolt-${_id}`} >
                    <span className="badge badge-warning">Delete</span>
                </label>


                <input type="checkbox" id={`del-bolt-${_id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor={`del-bolt-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Delete {name}?</h3>
                        <div className="modal-action">
                            <label htmlFor={`del-bolt-${_id}`} className="btn" onClick={() => deleteClick(_id)}>Yes</label>
                        </div>
                    </div>
                </div>


            </td>
        </tr >
    );
};

export default BoltRow;