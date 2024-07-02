import express from "express";

import {
  getPlaceById,
  getPlaceByUserId,
  createPlace,
  updatePlaceById,
  deletePlaceById,
} from "../Controllers/places-controllers.js";

const router = express.Router();

router.get("/:pid", getPlaceById);

router.get("/user/:uid", getPlaceByUserId);

router.post("/", createPlace);

router.patch("/:pid", updatePlaceById);
router.delete("/:pid", deletePlaceById);

export default router;
