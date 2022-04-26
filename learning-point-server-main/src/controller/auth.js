const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec((err, user) => {
      if (user) return res.status(400).json({
        message: 'User already exists'
      });

      const {
        firstName,
        lastName,
        email,
        password,
        qualification,
        subject,
        charge,
        time,
        contact,
        role,
        profilePicture
      } = req.body;
      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        userName: Math.random().toString(),
        qualification,
        subject,
        charge,
        time,
        contact,
        role,
        profilePicture
      });

      _user.save((err, data) => {
        if (err) {
 
          console.log(err);
          return res.status(400).json({
            message: 'Something is wrong'
          });
        }

        if (data) {
          return res.status(201).json({
            message: 'User created Successfully....!'
          })
        }
      });
    });
}

// exports.teacher_signup = (req, res) => {
//   Teacher.findOne({ email: req.body.email })
//     .exec((err, user) => {
//       if (user) return res.status(400).json({
//         message: 'User already exists'
//       });

//       const {
//         firstName,
//         lastName,
//         email,
//         password,
//         qualification,
//         subject,
//         charge,
//         time
//       } = req.body;
//       const _user = new Teacher({
//         firstName,
//         lastName,
//         email,
//         password,
//         userName: Math.random().toString(),
//         qualification,
//         subject,
//         charge,
//         time
//       });

//       _user.save((err, data) => {
//         if (err) {
//           return res.status(400).json({
//             message: 'Something is wrong'
//           });
//         }

//         if (data) {
//           return res.status(201).json({
//             message: 'User created Successfully....!'
//           })
//         }
//       });
//     });
// }

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec((err, user) => {
      if (err) {
        return res.status(400).json({ err }) 
      }
      if (user) {
        if (user.authenticate(req.body.password)) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
          const { firstName, lastName, email, fullName, qualification, subject, charge, time } = user;
          res.status(200).json({
            token,
            user: {
              firstName, lastName, email, fullName, qualification, subject, charge, time
            }
          })
        } else {
          return res.status(400).json({
            message: 'Invalid Password'
          })
        }
      }
      else {
        return res.status(400).json({
          message: 'Something went wrong'
        })
      }
    })
}



