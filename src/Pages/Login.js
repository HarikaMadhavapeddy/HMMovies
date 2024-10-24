import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

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
    <div>
      <input
        type="email"
        value={inputValues.email}
        onChange={(event) =>
          setInputValues({ ...inputValues, email: event.target.value })
        }
        placeholder="enter email address"
      />
      <input
        type="password"
        value={inputValues.pwd}
        onChange={(event) =>
          setInputValues({ ...inputValues, pwd: event.target.value })
        }
        placeholder="enter password"
      />
      <Link to="/signup">New user?</Link>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
