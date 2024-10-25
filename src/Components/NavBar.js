import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import logo from '../assests/HMmovies.png'

export default function NavBar({ user }) {
  const Navigate = useNavigate();
  function handleLogin() {
    Navigate("/login");
  }
  function handleLogout() {
    signOut(auth)
      .then((response) => Navigate("/"))
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="NavBar_conatiner">
      <div style={{ color: "white" }}><img src={logo}/></div>
      <div>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </div>
  );
}
