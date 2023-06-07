import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");

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
          <button>Click</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
