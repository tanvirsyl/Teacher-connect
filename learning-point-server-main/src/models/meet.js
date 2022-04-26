const mongoose = require('mongoose');

const meetSchema = new mongoose.Schema({
  teacherFirstName: {
    type: String,
    trim: true,
    min: 3,
    max: 20
  },
  teacherLastName: {
    type: String,
    trim: true,
    min: 3,
    max: 20
  },
  teacherEmail: {
    type: String,
    trim: true,
    lowercase: true,
  },
  studentEmail: {
    type: String,
    trim: true,
    lowercase: true,
  },
  meet_link: {
    type: String,
    trim: true,
  },
  bookedSubject: {
    type: String,
    trim: true,
    lowercase: true,
  },
  preferredTime: {
    type: String,
    trim: true,
    lowercase: true,
  },
  meetLinkSend: {
    type: String,
    trim: true,
    lowercase: true,
  }
}, { timestamps: true });


module.exports = mongoose.model('Meet', meetSchema);