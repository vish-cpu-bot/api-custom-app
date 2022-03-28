import React, { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppState } from "./store";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    pass: "",
    username: "",
    dob: "",
  });
  const {state:{signupState},actions:{dispatchSignup}} = useContext(AppState)
  console.log("state Signup",signupState)

  const onSignUpSubmit = () => {
      dispatchSignup({type:"ONSIGNUP_REQUEST"})
      let storageValue = JSON.parse(localStorage.getItem("signData") || "[]");
      storageValue.push(signUpData);
      localStorage.setItem("signData", JSON.stringify(storageValue));
      dispatchSignup({type:"ONSIGNUP_SUCCESS",payload:signUpData})
      setSignUpData({
        email: "",
        pass: "",
        username: "",
        dob: "",
      })
  };
  const history = useNavigate();
  const onLoginRedirect = () => {
    history("/");
  };
  return (
    <>
      <div className="container mt-5">
        <button
          onClick={() => onLoginRedirect()}
          className="btn btn-secondary mb-5"
        >
          GO TO LOGIN
        </button>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            value={signUpData.email}
            onChange={(e) => {
              setSignUpData({ ...signUpData, email: e.target.value });
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="pass"
            value={signUpData.pass}
            onChange={(e) => {
              setSignUpData({ ...signUpData, pass: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={signUpData.username}
            onChange={(e) => {
              setSignUpData({ ...signUpData, username: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">D.O.B</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={signUpData.dob}
            onChange={(e) => {
              setSignUpData({ ...signUpData, dob: e.target.value });
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => onSignUpSubmit()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Signup;
