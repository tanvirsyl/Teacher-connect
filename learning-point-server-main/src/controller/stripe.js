const Stripe = require('../models/stripe');
const ObjectId = require('mongodb').ObjectId;

exports.stripeInfo = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    subject,
    time,
    teacherId,
    teacherFirstName,
    teacherLastName,
    teacherContact,
    teacherEmail,
    reservedSubject
  } = req.body;
  const _user = new Stripe({
    firstName,
    lastName,
    email,
    subject,
    time,
    teacherId,
    teacherFirstName,
    teacherLastName,
    teacherContact,
    teacherEmail,
    reservedSubject
  });

  _user.save((err, data) => {
    if (err) {
      return res.status(400).json({
        message: 'Something is wrong'
      });
    }
    if (data) {
      return res.status(201).json({
        message: 'Payment send  Successfully....!'
      })
    }
  });
}

exports.getStripe = (req, res) => {
  Stripe.find({})
    .exec((err, info) => {
      if (err) return res.status(400).json({ error: err });
      if (info) {
        res.status(200).json({ info });
      }
    });
};

exports.deleteId = (req, res) => {
  Stripe.deleteOne({_id: ObjectId(req.params.id)})
    .exec((err, info) => {
      if (err) return res.status(400).json({ error: err });
      if (info) {
        res.status(200).json({ info });
      }
    });
};




