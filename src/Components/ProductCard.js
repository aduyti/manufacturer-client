import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ bolt }) => {
    const { _id, name, image, description, moq, Available, unitprice } = bolt;
    const navigate = useNavigate();
    return (
        <div class="card w-80 bg-base-100 shadow-xl rounded-xl">
            <figure className="mt-4"><img src={image} alt={name} className=" h-32 object-contain" /></figure>
            <div class="card-body">
                <div className="flex justify-between">
                    <h2 class="card-title text-center">{name}</h2>
                    <h2 class="card-title text-center">${unitprice}</h2>
                </div>
                <p>Description: {description}</p>
                <div className="font-semibold text-slate-500 flex justify-between">
                    <h2>MOQ: {moq}</h2>
                    <h2>In Stock: {Available}</h2>
                </div>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary w-full" onClick={() => navigate(`blot/${_id}`)}>Order Now</button>
                </div>
            </div>
        </div>);
};

export default ProductCard;