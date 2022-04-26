import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';
import './Details.css'

function MyVerticallyCenteredModal(props) {
  const { teacherId } = useParams();
  const history = useHistory();
  const [info, setInfo] = useState({})

  useEffect(() => {
    fetch('http://localhost:2000/api/all-teachers')
      .then(res => res.json())
      .then(data => {
        const details = data.teachers.find(data => data._id === teacherId)
        setInfo(details)
      })
  }, [])
console.log(info.email);
  const handlePayment = (token, addresses) => {
    const user = JSON.parse(localStorage.getItem('user'))
    user.teacherId = teacherId;
    user.teacherFirstName = info.firstName;
    user.teacherLastName = info.lastName;
    user.teacherEmail = info.email;
    user.teacherContact = info.contact;
    user.reservedSubject = info.subject;

    fetch('http://localhost:2000/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        history.push('/dashboard');
      })
  }
  return (
    <Modal
      { ...props }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          STRIPE PAYMENT GATEWAY
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Its Demo Stripe</p>
        <p>Card Number: 4242 4242 4242 4242 </p>
        <p>Date: 04/24</p>
        <p>CVC: 424</p>
        <StripeCheckout
          stripeKey="pk_test_51JjQkTLfYd9qUJL9e06uX342hrscQZyWkx6YLUV9FZfDZP7ZbPUwrOrvstEuFlNETfb1CJLC2vlBLUPOZahpzFrO00iJpf5pgI"
          token={ handlePayment }
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" className="btn" onClick={ props.onHide }>CLOSE</Button>{ ' ' }
      </Modal.Footer>
    </Modal>
  );
}

const Details = () => {
  const { teacherId } = useParams();
  const [info, setInfo] = useState({})
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetch('http://localhost:2000/api/all-teachers')
      .then(res => res.json())
      .then(data => {
        const details = data.teachers.find(data => data._id === teacherId)
        setInfo(details)
      })
  }, [])

  return (
    <div className="about">
      <div className="container">
        <div className="row  h-650 alignCenter" >
          <div className="col-md-6">
            <div className="about__img">
              <img src={ info.profilePicture } alt="man" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I'm <strong>{ info.firstName } { info.lastName }</strong> a high skilled teacher with experience in { info.subject } . Proficient in { info.subject }, has professional experience working with student, also skilled in Math, English...
                <br /><br />
                I'm highly passionate about teaching, helping students : <br />
                - Preferred Subject:  { info.subject }
              </div>
              <div className="about__info-p2">

              </div>
              <div className="info__contacts">
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="col-md-12">
                      <strong>NAME: </strong>
                      <p>{ info.firstName } { info.lastName }</p>
                    </div>
                    <div className="col-md-12">
                      <strong>Email: </strong>
                      <p>{ info.email } </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="col-md-12">
                      <strong>PHONE: </strong>
                      <p>{ info.contact }</p>
                    </div>
                    <div className="col-md-12">
                      <strong>Email: </strong>
                      <p>{ info.email } </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="col-md-12">
                      <strong>SUBJECT: </strong>
                      <p>{ info.subject }</p>
                    </div>
                    <div className="col-md-12">
                      <strong>CHARGE PER LECTURE: </strong>
                      <p>{ info.charge } BDT</p>
                    </div>
                  </div>
                </div>
                <Button variant="success" className="btn" onClick={ () => setModalShow(true) }>RESERVE A SET</Button>{ ' ' }
                <MyVerticallyCenteredModal
                  show={ modalShow }
                  onHide={ () => setModalShow(false) }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Details;

