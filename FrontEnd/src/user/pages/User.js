import React from "react";
import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Vivek",
      // image: "/meGithubProf.jpeg", // Adjusted path
      image: "https://avatars.githubusercontent.com/u/104636857?s=400&u=c3609abd423f7ea5cd910f5d573c9bf80be3add7&v=4", 
      places: 3
    },
  ];
  
  return <UsersList item={USERS} />;
};

export default User;
