import React from 'react';

const NotFound = () => {
    return (
        <div className="px-8 md:px-20">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold mb-14">No Content Found</h1>
                        <h1 className="text-6xl font-black text-secondary">404</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;