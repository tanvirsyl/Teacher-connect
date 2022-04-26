const User = require("../models/user");

exports.getTeachers = (req, res) => {
  User.find({ role: 'teacher' }) 
    .exec((err, teachers) => {
      if (err) return res.status(400).json({ error: err });
      if (teachers) {
        res.status(200).json({ teachers });
      }
    });
}; 