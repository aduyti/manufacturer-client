import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ bolt }) => {
    const { _id, name, image, description, moq, Available, unitprice } = bolt;
    const navigate = useNavigate();
    return (
        <div className="card w-80 bg-base-100 shadow-xl rounded-xl">
            <figure className="mt-4"><img src={image} alt={name} className=" h-32 object-contain" /></figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title text-center">{name}</h2>
                    <h2 className="card-title text-center">${unitprice}</h2>
                </div>
                <p>Description: {description}</p>
                <div className="font-semibold text-slate-500 flex justify-between">
                    <h2>MOQ: {moq}</h2>
                    <h2>In Stock: {Available}</h2>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full" onClick={() => navigate(`/purchase/${_id}`)}>Order Now</button>
                </div>
            </div>
        </div>);
};

export default ProductCard;