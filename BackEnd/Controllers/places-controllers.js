import {v4 as uuid} from "uuid";

import HttpError from "../Model/http-error.js";

const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous skyscrapers in the world!",
      imageUrl:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/crm/newyorkstate/GettyImages-486334510_CC36FC20-0DCE-7408-77C72CD93ED4A476-cc36f9e70fc9b45_cc36fc73-07dd-b6b3-09b619cd4694393e.jpg",
      address: "20 W 34th St, New York, NY 10118, United States",
      location: {
        lat: 40.748817,
        lng: -73.985428,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Statue of Liberty",
      description: "A colossal neoclassical sculpture on Liberty Island.",
      imageUrl:
        "https://i.pinimg.com/736x/d3/26/66/d32666c8a61e169175e1ff99e05902e5.jpg",
      address: "Liberty Island, New York, NY 10004, United States",
      location: {
        lat: 40.689247,
        lng: -74.044502,
      },
      creator: "u2",
    },
  ];



const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find((p) => {
      return p.id === placeId;
    });
    if (!place) {
      throw new HttpError("could not find a place for the provided id", 404);
    }
  
    res.json({ place });
  };

const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.uid;
    const userPlaces = DUMMY_PLACES.find((u) => {
      return u.creator === userId;
    });
    if (!userPlaces) {
      return next(
        new HttpError("could not find a place for the provided user id")
      );
    }
    res.json({ place: userPlaces });
  };

const createPlace = (req, res, next) => {
    const {title, description, location, address, creator} = req.body;
    // const title = req.body.title; llly

    const createdPlace = {
        id: uuid(),
        title: title,
        description: description,
        location: location,
        address,
        creator
    };
    DUMMY_PLACES.push(createdPlace);
    res.status(201).json({place: createdPlace});
};

export  { getPlaceById ,getPlaceByUserId, createPlace};