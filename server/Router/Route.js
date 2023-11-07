const{addNewUser,salarymorethanthirty,getAllUser,experiencemorethan2,twocondition,update,deletequery}=require("../Controller/employeeController")
const routes=require("express").Router();
routes.get("/Query1",addNewUser)
routes.get("/Query2",getAllUser)
routes.get("/Query3",salarymorethanthirty)
routes.get("/Query4",experiencemorethan2)
routes.get("/Query5",twocondition)
routes.get("/Query6",update)
routes.get("/Query7",deletequery)
module.exports=routes
