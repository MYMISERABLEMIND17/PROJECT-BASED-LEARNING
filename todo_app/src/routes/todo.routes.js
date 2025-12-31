const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo.controller');

router.get('/', todoController.todoHome);
router.get('/add', todoController.addTodo);
router.get('/edit', todoController.editTodo);
router.get('/delete', todoController.deleteTodo);

module.exports = router;

