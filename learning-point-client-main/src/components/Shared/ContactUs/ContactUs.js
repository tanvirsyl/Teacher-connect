import React from 'react';
import './ContactUs.css';
import emailjs from "emailjs-com";

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_066jv5q', 'template_kzu8cll', e.target, 'user_cSRO6ivK8vieThzoKbdEK')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    alert('Your Message Successfully Send')
    e.target.reset()
  }
  return (
    <div className="container">
        <h1 className="text-center mt-5 mb-3 contact__us__header contact__title">CONTACT US</h1>
        <form onSubmit={sendEmail} className="form">
          <div className="row pt-5 mx-auto" >
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto mb-5">
              <input type="submit" className="btn btn-style mb-2" value="Send Message"></input>
            </div>
          </div>
        </form>
      </div>
  );
};

export default ContactUs;