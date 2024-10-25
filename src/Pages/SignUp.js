import {
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUp.css";
import { FaUser } from "react-icons/fa";
//import { RecaptchaVerifier } from "firebase/auth";

export default function SignUp() {
  const [inputData, setInputData] = useState({
    email: "",
    pwd: "",
    cpwd: "",
    phone: "",
    error: false,
  });
  const [confirmationResult, setConfirmationResult] = useState(null);
  const Navigate = useNavigate();
  /*function setUpCaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "captcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          //onSignInSubmit();
          console.log("captcha");
        },
      }
    );
  }
  function handleVerifyCode(){
confirmationResult.confirm('1234567').then(()=>console.log('success')).catch(()=>console.log('failure'));
  }*/

  function handleSignup() {
    //basic validation, required values
    if (inputData.pwd !== inputData.cpwd) {
      setInputData({...inputData,error:true});
    } else {
      setInputData({...inputData,error:false});
      createUserWithEmailAndPassword(auth, inputData.email, inputData.pwd)
        .then(() => {
          Navigate("/dashboard");
          toast.success("user created successfully");
        })
        .catch((error) => toast.error(error.message));
    }

    /*setUpCaptcha();
    signInWithPhoneNumber(auth, '+1 4699435968', window.recaptchaVerifier)
      .then((response) => {
        console.log("sms is sent");
        setConfirmationResult(response);
      })
      .catch((error)=>console.log(error.message));*/
  }

  return (
    <div className="signup_container">
      <FaUser className="signup_container_icon" />
      <input
        type="email"
        value={inputData.email}
        placeholder="Enter email address"
        onChange={(event) =>
          setInputData({ ...inputData, email: event.target.value })
        }
      />

      <input
        type="password"
        value={inputData.pwd}
        placeholder="Enter password"
        onChange={(event) =>
          setInputData({ ...inputData, pwd: event.target.value })
        }
      />
      <input
        type="password"
        value={inputData.cpwd}
        placeholder="Confirm password"
        onChange={(event) =>
          setInputData({ ...inputData, cpwd: event.target.value })
        }
      />
      {inputData.error && <p>Password and confirm password should be same</p>}
      {/* 
      <input
        type="number"
        value={inputData.phone}
        placeholder="enter phone number"
        onChange={(event) =>
          setInputData({ ...inputData, phone: event.target.value })
        }
      />*/}
      <button onClick={handleSignup}>Submit</button>
    </div>
  );
}
