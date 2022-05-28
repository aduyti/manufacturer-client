import { ArrowRightIcon } from '@heroicons/react/outline';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Spinner from './Spinner';

const ProductsSection = () => {
    const { data, isLoading } = useQuery('bolts', () =>
        axios.get('http://localhost:5555/6bolts')
    )
    if (isLoading) return <Spinner />;
    return (
        <div className="mb-12 border-t-2">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Our Products</h3>
            <div className="flex flex-wrap justify-around gap-5 mb-6">
                {
                    data.data.map(bolt => <ProductCard key={bolt._id} bolt={bolt} />)
                }
            </div>
            <Link className="text-accent text-xl font-bold block text-center" to="/allproducts">View All Products <ArrowRightIcon className="w-6 h-6 inline" /></Link>

        </div>
    );
};

export default ProductsSection;