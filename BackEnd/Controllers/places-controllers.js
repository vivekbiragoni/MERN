import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";
import HttpError from "../Model/http-error.js";
import getCoordsForAddress from "../util/location.js";
import Place from "../Model/place.js";
import mongoose from "mongoose";
import User from "../Model/user.js";

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, Could not find the place",
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      "could not find a place for the provided id",
      404
    );
    return next(error);
  }

  res.json({ place: place.toObject({ getters: true }) });
};

const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let userPlaces;
  try {
    userPlaces = await Place.find({ creator: userId }); //mongoose find does't return a promise yet workable with the async await, returns an array
  } catch (err) {
    const error = new HttpError(
      "Fetching said user's places failed, try again later",
      500
    );
    return next(error);
  }
  if (!userPlaces || userPlaces.length === 0) {
    return next(
      new HttpError("could not find places for the provided user id")
    );
  }
  res.json({
    place: userPlaces.map((userPlace) => userPlace.toObject({ getters: true })),
  }); //getters:true makes the _id to id
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed, please check your data", 422));
  }

  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdPlace = new Place({
    title,
    description,
    location: coordinates,
    image: "https://cdn1.byjus.com/wp-content/uploads/blog/2023/03/17131610/STIM_Happy-Baby-Elephant-Running-scaled.jpeg",
    address,
    creator,
  });

  let user;
  try {
    user = await User.findById(creator);
    if (!user) {
      return next(new HttpError("Could not find user for the provided ID", 404));
    }
  } catch (err) {
    return next(new HttpError("Creating place failed, please try again", 500));
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    user.places.push(createdPlace); // Assuming user.places is an array
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    return next(new HttpError("Creating place failed, please try again", 500));
  }

  res.status(201).json({ place: createdPlace });
};


const updatePlaceById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data", 422)
    );
  }

  const { title, description, address } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const placeId = req.params.pid;

  let updatedPlace;
  try {
    updatedPlace = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, Could not update place.",
      500
    );
    return next(error);
  }

  updatedPlace.title = title;
  updatedPlace.description = description;
  updatedPlace.address = address; //this is the divation from the instructor, so does everything related to it, like getting new coordinates based on the updated address
  updatedPlace.location = coordinates;

  try {
    await updatedPlace.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong could not update place.",
      500
    );
    return next(error);
  }

  res.status(200).json({ place: updatedPlace.toObject({ getters: true }) });
};

const deletePlaceById = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId); // finding the place to be deleted
    if (!place) {
      const error = new HttpError("Could not find a place for this id.", 404);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, Could not delete the place.",
      500
    );
    return next(error);
  }
  try {
    await place.deleteOne(); // actual removal of the place
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, Could not delete the place.",
      500
    );
    return next(error);
  }
  res.status(200).json({ messsage: "Deleted Place" });
};

export {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlaceById,
  deletePlaceById,
};
