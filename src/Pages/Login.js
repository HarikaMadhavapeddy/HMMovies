import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import './Login.css';
import { FaUser } from "react-icons/fa";

export default function Login() {
  const [inputValues, setInputValues] = useState({
    email: "",
    pwd: "",
  });
  const Navigate=useNavigate();
  function handleLogin() {
    signInWithEmailAndPassword(auth, inputValues.email, inputValues.pwd)
      .then((response)=>Navigate('/dashboard'))
      .catch((error)=>console.log(error.message));
  }
  return (
    <div className="Login_container"> 
    <FaUser className="Login_container_icon"/>
      <input
        type="email"
        value={inputValues.email}
        onChange={(event) =>
          setInputValues({ ...inputValues, email: event.target.value })
        }
        placeholder="Enter email address"
      />
      <input
        type="password"
        value={inputValues.pwd}
        onChange={(event) =>
          setInputValues({ ...inputValues, pwd: event.target.value })
        }
        placeholder="Enter password"
      />
      <div className="Login_container_button">
      <Link className="Login_container_button_link" to="/signup">New user?</Link>
      <button onClick={handleLogin}>Login</button>
      </div>
      
    </div>
  );
}
