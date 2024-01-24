var taskService = require('../Services/taskServices');

var createTaskController = async (req, res) => {
    try{
        await taskService.createTaskDBService(req.body);
        console.log(req.body);
        res.send({"task":true});
    }catch(error){
        res.send({ "status": false, "message": error.msg });
    }
}

const fetchTasksController = async (req, res) => {
    try{
        const taskData = await taskService.fetchTasksDBService(res);
        res.send(taskData);
    }catch(err){
        res.status(500).send({message:err.message});
    }
}

const fetchFilteredTasksController = async (req,res) => {
    try{
        const start = req.body.filterStartDatetime;
        const end = req.body.filterEndDatetime;
        const offset = req.body.taskOffset;
        const rows = 5;
        const filteredData = await taskService.fetchFilteredTasksDBService(offset,rows,start,end);
        console.log('filter',filteredData);
        res.status(200).send(filteredData);
    }catch(err){
        res.status(404).send({message:err.message});
    }
}

const fetchDeliveryByIdController = async (req,res) => {
    try{
        const deliveryId = req.body.deliveryId;
        const deliveryData = await taskService.fetchDeliveryByIdDBService(deliveryId)
        res.status(200).send(deliveryData);
    }catch(err){
        res.status(404).send({message:err.message});
    }
}
module.exports = {createTaskController,fetchTasksController,fetchFilteredTasksController,fetchDeliveryByIdController};