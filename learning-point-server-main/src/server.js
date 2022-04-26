const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();

// routes
const authRoutes = require('./routes/auth');
const teacherRoutes = require('./routes/teachers');
const studentRoutes = require('./routes/students');
const stripeRoutes = require('./routes/stripe');
const userRoutes = require('./routes/user');
const meetRoutes = require('./routes/meet');
const approvedRoutes = require('./routes/Approved');

// mongodb connection 
mongoose.connect(
  `mongodb+srv://${ process.env.MONGO_DB_USER }:${ process.env.MONGO_DB_PASSWORD }@cluster0.bee4u.mongodb.net/${ process.env.MONGO_DB_DATABASE }?retryWrites=true&w=majority`
).then(() => {
  console.log('Database is connected');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/api', authRoutes);
app.use('/api', teacherRoutes);
app.use('/api', studentRoutes);
app.use('/api', stripeRoutes);
app.use('/api', userRoutes);
app.use('/api', meetRoutes);
app.use('/api', approvedRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${ process.env.PORT }`);
});