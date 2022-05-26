import React from 'react';
import Banner from '../Components/Banner';
import ContactUs from '../Components/ContactUs';
import ProductsSection from './ProductsSection';

const Home = () => {
    return (
        <>
            <Banner />
            <ProductsSection />
            <ContactUs />
        </>
    );
};

export default Home;