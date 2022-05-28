import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from './Spinner';


const Reviews = () => {
    const { data, isLoading } = useQuery('reviews', () =>
        axios.get('http://localhost:5555/reviews')
    )
    if (isLoading) return <Spinner />;
    return (
        <div className="mb-16">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center">Customers Opinions</h3>
            <div className="">
                {
                    data.data.map(review => <div key={review._id}>{review.text}</div>)
                }
            </div>
        </div>
    );
};

export default Reviews;