const express = require('express');
const todoRoutes = require('./routes/todo.routes');

const app = express();

app.use('/todos', todoRoutes);

module.exports = app;
