import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as StarOutIcon } from '@heroicons/react/outline';
import React from 'react';

const ReviewCard = ({ review }) => {
    const { uname, rating, text } = review;
    const rate = [1, 2, 3, 4, 5];
    return (
        <div class="card w-96 bg-base-100 shadow-xl rounded-xl">
            <div class="card-body ">
                <h2 class="card-title mx-auto">{text}</h2>
                <div class="flex justify-between mx-5 font-bold">
                    <div className="flex">
                        {
                            rate.map((value, index) => value <= rating ?
                                <StarIcon key={index} className=" text-warning w-4 h-4" />
                                : <StarOutIcon key={index} className=" text-warning w-4 h-4" />
                            )
                        }
                    </div>

                    <h3 className="text-primary">{uname}</h3>
                </div>
            </div>
        </div>);
};

export default ReviewCard;