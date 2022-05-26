import React from 'react';
import Banner from '../Components/Banner';
import ContactUs from '../Components/ContactUs';
import ProductsSection from './ProductsSection';

const Home = () => {
    return (
        <div className="px-8 md:px-20">
            <Banner />
            <ProductsSection />
            <ContactUs />
        </div>
    );
};

export default Home;