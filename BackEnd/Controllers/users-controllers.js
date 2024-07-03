import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";
import HttpError from "../Model/http-error.js";

let DUMMY_USERS = [
  {
    id: "u1",
    name: "vivek",
    email: "vivekbiragoni@gmail.com",
    password: "Vivek@4914",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid inputs passed, please check your data", 422);
  }
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);

  if (hasUser) {
    throw new HttpError(
      "Could not create an user, user with this email already exists",
      422
    );
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
    
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError("Invalid inputs passed, please check your data", 422);
  }

  const { email, password } = req.body;
  const identifiedUser = DUMMY_USERS.find((u) => u.email == email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError(
      "Could not identify user, credentials seem to be wrong",
      401
    );
  }
  res.json({ message: "Logged in!" });
};

export { getUsers, signup, login };
