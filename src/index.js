const express = require('express');
const mongoose = require('mongoose');
const tasksRoutes = require('../routes/taskRoutes')

//init app
const app = express();

//PORT var
const port = process.env.PORT || 3000;

//middelware
app.use(express.json());

//DB connection
mongoose
.connect('mongodb://admin:admin@mongo:27017/todo?authSource=admin')
.then(() => console.log('connected to DB...'))
.catch((err) => console.log('failed to connect to DB ', err));
const db = mongoose.connection;

//routes
app.use(tasksRoutes);

app.listen(port, () => console.log(`Server started on port: ${port}`));