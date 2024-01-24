const sql = require('../../../sql');

const insertQuery = async (taskDetails, taskId, deliveryId)=>{
    try{        
        const {name, email, address, execTime} = {...taskDetails};
        const insert = "INSERT INTO tb_delivery (delivery_id, task_id, creator_name, email, delivery_address, deliver_before) VALUES ?";
        console.log(taskDetails);
        const values = [
            [deliveryId, taskId, name, email, address, execTime]
        ];
    
        await sql.makeQuery(insert,[values]);
    }catch(err){
        throw(err);
    }
}

const fetchQuery = async () => {
    try{
        const fetch = "select * from tb_delivery";
        return await sql.makeQuery(fetch,[]);
    }catch(err){
        throw(err);
    }
}

const fetchFilteredQuery = async (offset,rows,start,end) =>{
    try{
        const fetch = `call fetchFilteredTaskDetails(?)`;
        const values = [
            offset,rows,start,end
        ];
        return await sql.makeQuery(fetch,[values]);
    }catch(err){
        throw(err);
    }
}

const fetchDeliveryById = async (deliveryId) => {
    try{
        const fetch = `call fetchDeliveryById(?)`;
        return await sql.makeQuery(fetch,[deliveryId]);
    }catch(err){
        throw(err);
    }
}

module.exports = {insertQuery,fetchQuery,fetchFilteredQuery,fetchDeliveryById};