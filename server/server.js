const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

require('dotenv').config({ path: __dirname + '/.env' });
console.log('MONGO_URI:', process.env.MONGO_URI || 'Not Loaded');


const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/pr', require('./routes/pr'));
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});