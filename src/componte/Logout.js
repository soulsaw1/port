import React, { useState } from "react";
import pic from "../image/computer.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selector } from "../fueture/User";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Project from "./Project";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Logout() {
  const user = useSelector(selector);
  const dispatch = useDispatch();
  const handleout = (e) => {
    dispatch(logout());
  };

  return (
    <div className="full">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
        </Container>
        <button className="button" onClick={handleout}>
          Logout
        </button>
      </Navbar>
      <br></br>
      <div className="body">
        <h1>
          Hello👋 <span className="color"> {user.name} </span>{" "}
        </h1>
        <br></br>
        <h2>
          I'm <span className="span">Muhammed Sianb</span>
        </h2>
        <h3>Junior Developer</h3>
        <img className="pic" src={pic} alt="" />
      </div>
      <Project />
    </div>
  );
}

export default Logout;
