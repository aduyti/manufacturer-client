import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';
import Spinner from './Spinner';


const Reviews = () => {
    const { data, isLoading } = useQuery('reviews', () =>
        axios.get('https://mysterious-coast-30403.herokuapp.com/reviews')
    )
    if (isLoading) return <Spinner />;
    return (
        <div className="mb-16">
            <h3 className="text-primary pt-4 text-2xl font-bold text-center pb-6">Customers Opinions</h3>
            <div className="flex flex-wrap justify-around gap-6">
                {
                    data.data.map(review => <ReviewCard key={review._id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;