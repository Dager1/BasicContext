import React, { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function Login() {
  const { setName, setShowProfile } = useContext(LoginContext);
  return (
    <div>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
          <br />
          <button
            onClick={() => {
              setShowProfile(true);
            }}>
            Click
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
