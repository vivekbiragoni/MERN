import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous skyscrapers in the world!',
      imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/crm/newyorkstate/GettyImages-486334510_CC36FC20-0DCE-7408-77C72CD93ED4A476-cc36f9e70fc9b45_cc36fc73-07dd-b6b3-09b619cd4694393e.jpg',
      address: '20 W 34th St, New York, NY 10118, United States',
      location: {
        lat: 40.748817,
        lng: -73.985428
      },
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Statue of Liberty',
      description: 'A colossal neoclassical sculpture on Liberty Island.',
      imageUrl: 'https://i.pinimg.com/736x/d3/26/66/d32666c8a61e169175e1ff99e05902e5.jpg',
      address: 'Liberty Island, New York, NY 10004, United States',
      location: {
        lat: 40.689247,
        lng: -74.044502
      },
      creator: 'u2'
    }
  ];
  
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;