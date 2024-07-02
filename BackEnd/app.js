import express from "express";
import bodyParser from "body-parser";

import placesRoutes from "./routes/places-routes.js";

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);

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
