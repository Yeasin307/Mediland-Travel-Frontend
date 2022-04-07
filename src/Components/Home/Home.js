import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import TopPackages from '../TopPackages/TopPackages';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <TopPackages></TopPackages>
        </>
    );
};

export default Home;