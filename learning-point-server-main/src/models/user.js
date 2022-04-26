const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    min: 3,
    max: 20
  },
  lastName: {
    type: String,
    trim: true,
    min: 3,
    max: 20
  },
  userName: {
    type: String,
    trim: true,
    unique: true,
    index: true,
    lowercase: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
  },
  contact: {
    type: String,
    trim: true,
    lowercase: true,
  },
  qualification: {
    type: String,
    trim: true,
    lowercase: true,
  },
  subject: {
    type: String,
    trim: true,
    lowercase: true,
  },
  charge: {
    type: String,
    trim: true,
    lowercase: true,
  },
  time: {
    type: String,
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    trim: true,
    lowercase: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  contactNumber: { type: String },
  profilePicture: { type: String }
}, { timestamps: true });

userSchema.virtual('password')
  .set(function (password) {
    this.hash_password = bcrypt.hashSync(password, 10);
  })

userSchema.virtual('fullName')
  .get(function () {
    return `${ this.firstName } ${ this.lastName }`;
  })

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  }
}

module.exports = mongoose.model('User', userSchema);