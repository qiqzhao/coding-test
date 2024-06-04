const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose
  .connect('mongodb://localhost:27017/coding-test')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const app = express();
const port = 3001;

app.use(cookieParser());
app.use(express.json({ limit: '1 mb' }));
app.use(express.urlencoded({ extended: true, limit: '1 mb' }));
app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);

  res.json({
    error: {
      message: err.message || 'Error',
    },
  });
};

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
