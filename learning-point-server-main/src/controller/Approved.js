const Approved = require('../models/approved');

exports.approvedInfo = (req, res) => {
  const {
    approvedId,
    teacherEmail,
    teacherId,
    studentName,
    studentEmail,
    subject
  } = req.body;
  const _user = new Approved({
    approvedId,
    teacherEmail,
    teacherId,
    studentName,
    studentEmail,
    subject
  });

  _user.save((err, data) => {
    if (err) {
      return res.status(400).json({
        message: 'Something is wrong'
      });
    }

    if (data) {
      return res.status(201).json({
        message: 'Approved Id Successfully....!'
      })
    }
  });
}

exports.getApprovedId = (req, res) => {
  Approved.find({})
    .exec((err, info) => {
      if (err) return res.status(400).json({ error: err });
      if (info) {
        res.status(200).json({ info });
      }
    });
};








