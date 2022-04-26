const User = require("../models/user");

exports.getStudents = (req, res) => {
  User.find({ role: 'student' }) 
    .exec((err, students) => {
      if (err) return res.status(400).json({ error: err });
      if (students) {
        res.status(200).json({ students });
      }
    });
}; 