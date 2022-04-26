const mongoose = require('mongoose');

const approvedSchema = new mongoose.Schema({
  approvedId: {
    type: String,
    trim: true,
  },
  teacherEmail: {
    type: String,
    trim: true,
  },
  teacherId: {
    type: String,
    trim: true,
  },
  studentName: {
    type: String,
    trim: true,
  },
  studentEmail: {
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    trim: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Approved', approvedSchema);