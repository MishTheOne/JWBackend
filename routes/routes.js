var express = require('express');

var userController = require('../src/user/Controllers/userController');
var taskController = require('../src/user/Controllers/taskController');
const router = express.Router();

router.route('/user/login').post(userController.loginUserController);
router.route('/user/register').post(userController.registerUserController);
router.route('/user/createTask').post(taskController.createTaskController);
router.route('/user/fetchTasks').get(taskController.fetchTasksController);
router.route('/user/fetchFilteredTasks').post(taskController.fetchFilteredTasksController);
router.route('/user/fetchDeliveryById').post(taskController.fetchDeliveryByIdController);

module.exports = router;