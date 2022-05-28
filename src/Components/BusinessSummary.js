import React from 'react';
import { CashIcon, CogIcon, GlobeIcon, UserGroupIcon } from '@heroicons/react/outline'

const BusinessSummary = () => {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12 text-base-100">
            <div className="bg-accent h-36 flex flex-col shadow-lg justify-center items-center rounded-xl">
                <h4 className="text-5xl font-extrabold text-primary">25</h4>
                <GlobeIcon className="text-warning w-10 h-10" />
                <p className="text-xl font-bold">Countries</p>
            </div>
            <div className="bg-accent h-36 flex flex-col shadow-lg justify-center items-center rounded-xl">
                <h4 className="text-5xl font-extrabold text-primary">525</h4>
                <UserGroupIcon className="text-warning w-10 h-10" />
                <p className="text-xl font-bold">Customers</p>
            </div>
            <div className="bg-accent h-36 flex flex-col shadow-lg justify-center items-center rounded-xl">
                <h4 className="text-5xl font-extrabold text-primary">60+</h4>
                <CogIcon className="text-warning w-10 h-10" />
                <p className="text-xl font-bold">types of Bolts</p>
            </div>
            <div className="bg-accent h-36 flex flex-col shadow-lg justify-center items-center rounded-xl">
                <h4 className="text-5xl font-extrabold text-primary">500K</h4>
                <CashIcon className="text-warning w-10 h-10" />
                <p className="text-xl font-bold">Annual Revenue</p>
            </div>
        </div>
    );
};

export default BusinessSummary;