import React from "react";
import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Vivek",
      image:
        "https://scontent.cdninstagram.com/v/t51.2885-19/437673155_965503345292070_2969581083932444160_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=u6BaYzxLtRUQ7kNvgEx9Kld&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYAVzJLVZ2flbqH3kiSaxQBcm8B1jrJYZSdGZ5A_B0JAAg&oe=667B5E81&_nc_sid=10d13b",
      places: 3
    },
  ];
  return <UsersList item={USERS} />;
};

export default User;
