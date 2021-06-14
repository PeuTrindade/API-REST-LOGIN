const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
const adminRouter = require("./routes/adminRouter");

mongoose.connect("mongodb://localhost/login",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Banco de dados rodando com sucesso!");
}).catch((error)=>{
    console.log(error);
});
app.use("/user",express.json(),userRouter);
app.use("/admin",express.json(),adminRouter)

app.listen(process.env.PORT,()=>{
    console.log("Servidor rodando com sucesso!");
});