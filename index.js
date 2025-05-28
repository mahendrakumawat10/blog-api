require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();
server.use(express.json());

const postRouter = require("./routers/postRouter");

server.use("/posts",postRouter)


const PORT = process.env.PORT || 5000;



mongoose.connect(process.env.MONGO_URI)
.then(
    () => {
        console.log("Database connected");
        server.listen(
            PORT,
            () => 
                console.log(`Server started ${PORT}`)
            
        )
    }
).catch(
    () => 
        console.log("Databse not connected")
)





