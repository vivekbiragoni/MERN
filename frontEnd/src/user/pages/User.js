import React from "react";
import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Vivek",
      image:
        "/meGithubProf.jpeg",
      places: 3
    },
  ];
  return <UsersList item={USERS} />;
};

export default User;
