import React from 'react';
import BoltRow from '../Components/BoltRow';
import useProducts from '../Utilities/Hooks/useProducts';
const ManageProducts = () => {
    const [bolts] = useProducts();


    return (
        <div className="px-8 md:px-20">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Manage All Products</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Bolt</th>
                            <th>Name</th>
                            <th>MOQ</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bolts.map((bolt) => <BoltRow key={bolt._id} bolt={bolt} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;