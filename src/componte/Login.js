import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../componte/Login.css";
import { login } from "../fueture/User";

function Login() {
  const dispatch = useDispatch();
  const handle = (e) => {
    e.preventDefault();

    dispatch(login({ name: name, email: email, pass: pass, loggedIn: true }));
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <h1>Login Here</h1>
      <form onSubmit={(e) => handle(e)}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          type="password"
          value={pass}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />{" "}
        <button type="sunmit">submit</button>
      </form>{" "}
    </div>
  );
}

export default Login;
