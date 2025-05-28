require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();
server.use(express.json());

const postRouter = require("./routers/postRouter");

<<<<<<< HEAD
server.use("/posts", postRouter)


// error handler
server.use(
    (error, req, res) => {
        console.error(error);
        res.status(404).json(
            {
                message: "somthing went wrong!",
                status: 0
            }
        );
    }
);

const PORT = process.env.PORT || 4000;

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
=======
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
>>>>>>> 34ebe1765697f7481654c26ea7dc67c93ff974ec





