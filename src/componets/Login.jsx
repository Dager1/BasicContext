import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [showProfile, setShowProfile] = useState(false);

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
              e.preventDefault();
            }}>
            Click
          </button>
        </div>
      </form>
      {showProfile && <h1>{name}</h1>}
    </div>
  );
}

export default Login;
