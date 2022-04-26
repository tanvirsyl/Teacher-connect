import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Landing from '../Landing/Landing';
import Footer from '../../Shared/Footer/Footer';
import Faq from '../FAQ/Faq';
import Subjects from '../Subjects/Subjects';
import ContactUs from '../../Shared/ContactUs/ContactUs';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Landing />
      <Subjects />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;