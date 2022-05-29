import React from 'react';
import Banner from '../Components/Banner';
import BusinessSummary from '../Components/BusinessSummary';
import ContactUs from '../Components/ContactUs';
import FindUs from '../Components/FindUs';
import Reviews from '../Components/Reviews';
import ProductsSection from '../Components/ProductsSection';

const Home = () => {
    return (
        <div className="px-8 md:px-20">
            <Banner />
            <ProductsSection />
            <BusinessSummary />
            <Reviews />
            <ContactUs />
            <FindUs />
        </div>
    );
};

export default Home;