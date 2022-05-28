import React from 'react';
import ProductCard from '../Components/ProductCard';
import useProducts from '../Utilities/Hooks/useProducts';

const AllProducts = () => {
    const [bolts] = useProducts();
    return (
        <div className="px-8 md:px-20">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Our All Products</h3>
            <div className="flex flex-wrap justify-around gap-5 mb-6">
                {
                    bolts.map(bolt => <ProductCard key={bolt._id} bolt={bolt} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;