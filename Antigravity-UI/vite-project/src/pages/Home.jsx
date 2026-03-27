import React from 'react';
import Banner from '../components/Banner';
import WhyChooseUs from '../components/WhyChooseUs';
import BestSellingProduct from '../components/BestSellingProduct';
import Experiences from '../components/Experiences';
import Materials from '../components/Materials';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main className="flex-grow w-full">
      <Banner />
      <WhyChooseUs />
      <BestSellingProduct />
      <Experiences />
      <Materials />
      <Testimonials />
    </main>
  );
};

export default Home;
