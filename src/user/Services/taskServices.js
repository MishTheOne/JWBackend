const { v4: uuidv4 } = require('uuid');
const hash = require('../../../hash');
const taskSql = require('../Models/taskSql');

const key = uuidv4();

const createTaskDBService = async (taskDetails)=>{
    const taskId = hash.generateHash(key);
    // console.log(taskId);
    try{
        for(let i = 0; i < taskDetails.length; i+=1){
            await taskSql.insertQuery(taskDetails[i],taskId,taskId+i+1);
        }
    }catch(error){
        throw(error);
    }
}

const fetchTasksDBService = async () => {
    try{
        return await taskSql.fetchQuery();
    }catch(err){
        throw(err);
    }
}

const fetchFilteredTasksDBService = async (offset,rows,start,end) => {
    try{
        const data =  await taskSql.fetchFilteredQuery(offset,rows,start,end);
        console.log('data',data);
        return data;
    }catch(err){
        throw(err);
    }
}

const fetchDeliveryByIdDBService = async (deliveryId) => {
    try{
        return await taskSql.fetchDeliveryById(deliveryId);
    }catch(err){
        throw(err);
    }
}
module.exports = {createTaskDBService,fetchTasksDBService,fetchFilteredTasksDBService,fetchDeliveryByIdDBService};