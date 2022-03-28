import React, { useContext, useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import SignUp from "./Signup";
import { AppState } from "./store";




const Login = () => {
  const {state:{loginState},actions:{dispatchLogin}} = useContext(AppState)
  console.log("stateeee",loginState,dispatchLogin)
  const history = useNavigate();
  const onSubmit = async () => {
    //     try{
    // loginDispatch({type:"ONSUBMIT_REQUEST"})

    // loginDispatch({type:"ONSUBMIT_SUCCESS",payload:"hello data"})
    //     }catch(e){
    //       loginDispatch({type:"ONSUBMIT_ERROR",payload:e})
    //     }
  };

  const redirectSignup = () => {
    history('/signup');
  };

  return (
    <>
      <div className="container mt-5">
        <button className="btn btn-secondary mb-5" onClick={() => redirectSignup()}>
          GO TO SIGNUP
        </button>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => onSubmit()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Login;
