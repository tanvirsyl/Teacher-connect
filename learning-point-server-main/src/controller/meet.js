const Meet = require('../models/meet');

exports.meetInfo = (req, res) => {
  const {
    teacherFirstName,
    teacherLastName,
    teacherEmail,
    studentEmail,
    meet_link,
    bookedSubject,
    preferredTime,
    meetLinkSend
  } = req.body;
  const _user = new Meet({
    teacherFirstName,
    teacherLastName,
    teacherEmail,
    studentEmail,
    meet_link,
    bookedSubject,
    preferredTime,
    meetLinkSend
  });

  _user.save((err, data) => {
    if (err) {
      return res.status(400).json({
        message: 'Something is wrong'
      });
    }

    if (data) {
      return res.status(201).json({
        message: 'Meet link send Successfully....!'
      })
    }
  });
}

exports.getMeet = (req, res) => {
  Meet.find({})
    .exec((err, info) => {
      if (err) return res.status(400).json({ error: err });
      if (info) {
        res.status(200).json({ info });
      }
    });
};




