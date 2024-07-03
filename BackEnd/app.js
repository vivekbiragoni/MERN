import express from "express";
import bodyParser from "body-parser";

import dotenv from 'dotenv';
dotenv.config();


import placesRoutes from "./routes/places-routes.js";
import usersRoutes  from "./routes/users-routes.js";

import HttpError from "./Model/http-error.js";

const app = express();

app.use(bodyParser.json()); 

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req,res, next)=>{
  const error = new HttpError("Could Not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "Unknown error occured"});
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
