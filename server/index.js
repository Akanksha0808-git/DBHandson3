const express=require("express");
const Route=require("./Router/Route")
const connection=require("./config/db")
const app=express();
const cors=require("cors");

app.use(express.json());


const port=5000;

app.use(cors({
  origin:"*"
}))
app.use("/api",Route)

app.use("/",(req,res)=>{
  res.send("home page")
})



app.listen(port,async ()=>{
  try{ 
    await connection();
    console.log(`server started after making connection `,port)}
  catch(err){
    console.log(err,"error occured due to server start")
  }
 
})

