import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";
import HttpError from "../Model/http-error.js";
import User from "../Model/user.js";
import mongoose from "mongoose";
import user from "../Model/user.js";

let DUMMY_USERS = [
  {
    id: "u1",
    name: "vivek",
    email: "vivekbiragoni@gmail.com",
    password: "Vivek@4914",
  },
];

const getUsers = async (req, res, next) => {
  let users;
  try{
    users = await User.find({}, "-password"); //skip the password while returning   
  }catch(err){
    const error = new HttpError(
      "Fetching users failed, Please try again later.",
      500 
    );
    return next(error);
  }
  res.json({ users: users.map(user => user.toObject({getters: true}))});
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data",
      422
    );
    return next(error);
  }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("SignUp failed, Please try again.", 500);
    return next(error);
  }
  if (existingUser) {
    const error = new HttpError(
      "Could not create an user, user with this email already exists",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password,
    image: "https://images.thedirect.com/media/photos/jonsnow1.jpg",
    places: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Sign up failed, please try again", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next( new HttpError("Invalid inputs passed, please check your data", 422));
  }

  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Logging in failed, Please try again.", 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Could not identify user, credentials seem to be wrong",
      401
    );
    return next(error);
  }
  res.json({ message: "Logged in!" });
};

export { getUsers, signup, login };
