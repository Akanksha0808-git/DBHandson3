const employee=require("../model/employeemodel")
const data=require("../DataStore/DataStore")
const addNewUser=async(req,res)=>{
    try {
        
        const response = await employee.create(data)
        console.log(`${data.insertedCount} employee records inserted`)
      res.send({msg:"added successfully" ,data:response})
        
    }
    catch (error) {
        console.log("Error while inserting data", error);
      res.send({msg:"error occured",error})
    }
    }
    const getAllUser = async (req, res)=>{
      try{
          const result = await employee.find()
              res.status(200).send({
                  msg : "All User Is Found",
                  User : result
              })
           }
           catch(err){
              console.log("Error to Find User " + err)
           }
  }
// Queries 2

    const salarymorethanthirty=async (req,res)=>{
        try {
            const response = await employee.find({ salary: { $gt: "30000" } });
            res.send({msg:"added successfully" ,data:response})
    
          } catch (error) {
            res.status(400).json({
              success: false,
              error,
            });
          }
        };
        // Queries 3

const experiencemorethan2=async (req,res)=>{
  try {
      const data = await employee.find({ overallExp: { $gt: "2" } });
      res.send({msg:"added successfully" ,data:data})

    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
}
// Queries 4

const twocondition=async (req,res)=>{
  try {
      const data = await employee.find({ overallExp: { $gt: "1" } ,yearGrad:{ $gt: "2015" } });
      res.send({msg:"added successfully" ,data:data})

    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
}
// Queries 5

const update=async (req,res)=>{
  try {
      const data = await employee.updateOne({"salary":"70000"},{$set:{"salary":"65000"}});
      res.send({msg:"added successfully" ,data:data})

    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
}
// Queries 6

const deletequery =async(req,res)=>{
  try {
      const data = await employee.deleteOne({"lastCompany":"Y"});
      res.send({msg:"deleted successfull" ,data:data})

    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
}
    module.exports={addNewUser, getAllUser, salarymorethanthirty,experiencemorethan2,twocondition,update,deletequery}