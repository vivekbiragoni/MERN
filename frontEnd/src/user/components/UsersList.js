import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";
const UsersList = (props) => {
  if (props.UsersList.Length() === 0) {
    return (
      <div className="center">
        <h2>No User found</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.item.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
