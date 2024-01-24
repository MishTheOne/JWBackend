var userService = require('../Services/userServices');

var registerUserController = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await userService.registerUserDBService(req.body,res);
    console.log(status);


    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var loginUserController = async (req, res) => {
    try {
        const result = await userService.loginuserDBService(req.body);
        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(401).send({ "status": false, "message": error.msg });
    }
}



module.exports = { registerUserController, loginUserController};