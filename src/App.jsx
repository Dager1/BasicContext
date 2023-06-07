import { useState } from "react";

import "./App.css";
import Login from "./componets/Login";
import Profile from "./componets/Profile";
import LoginContext from "./context/LoginContext";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      <LoginContext.Provider>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
