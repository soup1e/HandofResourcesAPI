const express = require('express');
const path = require('path');
const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use(express.static(path.join(__dirname, 'public')));

app.use('/apps', require('./controllers/apps'));
app.use('/cars', require('./controllers/cars'));
// app.use('/countries', require('./controllers/countries'));
// app.use('/employees', require('./controllers/employees'));
// app.use('/users', require('./controllers/users'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
