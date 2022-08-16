import "./App.css";
import Login from "./componte/Login";
import Logout from "./componte/Logout";

import { useSelector } from "react-redux";
import { selector } from "./fueture/User";

function App() {
  const user = useSelector(selector);
  return <div className="App">{user ? <Logout /> : <Login />}</div>;
}

export default App;
