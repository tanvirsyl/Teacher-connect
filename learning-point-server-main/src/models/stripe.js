const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const stripeSchema = new mongoose.Schema({
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
  email: {
    type: String,
    trim: true,
    unique: false,
    lowercase: true,
  },
  subject: {
    type: String,
    trim: true,
    lowercase: true,
  },
  time: {
    type: String,
    trim: true,
    lowercase: true,
  },
  teacherId: {
    type: String,
    trim: true,
  },
  teacherFirstName: {
    type: String,
    trim: true,
    lowercase: true,
  },
  teacherLastName: {
    type: String,
    trim: true,
    lowercase: true,
  },
  teacherEmail: {
    type: String,
    trim: true,
    lowercase: true,
  },
  reservedSubject: {
    type: String,
    trim: true,
    lowercase: true,
  },
  teacherContact: {
    type: Number,
    trim: true,
  }
}, { timestamps: true });

stripeSchema.virtual('fullName')
  .get(function () {
    return `${ this.firstName } ${ this.lastName }`;
  })


module.exports = mongoose.model('Stripe', stripeSchema);