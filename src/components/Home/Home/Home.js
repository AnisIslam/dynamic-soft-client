import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import TopClient from '../TopClient/TopClient';
import WorkSample from '../WorkSample/WorkSample';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <TopClient></TopClient>
            <WorkSample></WorkSample>           
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;