// require('dotenv').config({path : './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({path: '../.env'});


connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is runnig at port : ${process.env.PORT}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })               //it is for the app
    })
})
.catch((error) => {
    console.log("MONGO db connection failed !!! " , error);
})







// ONE OF THE WAY OF DB CONNECTION 

/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/