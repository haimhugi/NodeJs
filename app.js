const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users-routes');
const app = express();
app.use(bodyParser.json());

app.use('/api/users', usersRoutes); // => /api/users...

app.listen(5000);