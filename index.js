const express=require("express");
const app=express();
const port=3002;

app.get("/home",(req,res)=>{
    res.send("Welcome to Prepbytes")
})
app.get("/api/main",(req,res)=>{
    res.send({
        "What is express?":"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        "What is nodejs?":"Node.js is an open-source and cross-platform JavaScript runtime environment."
    })
})
app.listen(3002,()=>{
    try
    {
        console.log(`server running on port number:${port}`);
    }
    catch(err)
    {
        console.log(`server running on port number:${err}`);
    }
});