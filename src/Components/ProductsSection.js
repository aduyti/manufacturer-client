import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from './Spinner';

const ProductsSection = () => {
    const { data, isLoading } = useQuery('bolts', () =>
        axios.get('http://localhost:5555/6bolts')
    )
    if (isLoading) return <Spinner />;
    return (
        <div className="mb-16 border-t-2">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center">Our Products</h3>
            <div className="">
                {
                    data.data.map(bolt => <div key={bolt._id}>{bolt.name}</div>)
                }
            </div>
        </div>
    );
};

export default ProductsSection;