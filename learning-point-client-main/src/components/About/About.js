import * as React from 'react';
import './About.css';
import img from '../../assets/about.1b8d5e3b.jpeg';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const About = () => {
  return (
    <React.Fragment>
    <Navigation></Navigation>
      <div>
        <h3 className="about-us text-center pt-5 pb-5">About Us</h3>
      </div>
      <div className="about-image">
        <img src={img} alt="" />
      </div>
      <div className="about-details">
        <h2>Learning Point is an online platform to connect students and teachers.</h2>
        <p>Many students and guardians face problems when finding a good teacher. Usually because they don’t know many teachers or they don’t have the contact of teachers. Similarly, many teachers can’t find students to teach because they also don’t have their contact. </p><p>This is a very common problem. Learning Point platform aims to solve this exact problem. We charge a very less cost. </p><p>In this platform, students can easily find teachers for their respective courses . Students can book a seat by subject and suitable time for join online class of different subjects. </p><p>Also, the teacher can give joining online class link to the students. If the student finds any issues then they can contact directly with the support team through contact form.</p><p>This platform also has a blog section where registered users can read helpful articles. There is also a feature rich admin dashboard from where admin can moderate what happens on the platform.</p>
        </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default About;