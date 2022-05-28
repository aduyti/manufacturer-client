import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ProductCard from './ProductCard';
import Spinner from './Spinner';

const ProductsSection = () => {
    const { data, isLoading } = useQuery('bolts', () =>
        axios.get('http://localhost:5555/6bolts')
    )
    if (isLoading) return <Spinner />;
    return (
        <div className="mb-16 border-t-2">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Our Products</h3>
            <div className="flex flex-wrap justify-around gap-5">
                {
                    data.data.map(bolt => <ProductCard key={bolt._id} bolt={bolt} />)
                }
            </div>
        </div>
    );
};

export default ProductsSection;