import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function Profile() {
  const { name } = useContext(LoginContext);
  return (
    <div>
      <h1>Profile</h1>
      <h2>UserName:{name}</h2>
    </div>
  );
}

export default Profile;
