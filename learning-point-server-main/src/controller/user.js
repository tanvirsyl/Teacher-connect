const User = require('../models/user');

exports.getUser = (req, res) => {
  User.find({})
    .exec((err, info) => {
      if (err) return res.status(400).json({ error: err });
      if (info) {
        res.status(200).json({ info });
      }
    });
};
