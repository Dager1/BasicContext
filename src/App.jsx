import { useState } from "react";

import "./App.css";
import Login from "./componets/Login";
import Profile from "./componets/Profile";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  return <div>{showProfile ? <Profile /> : <Login />}</div>;
}

export default App;
