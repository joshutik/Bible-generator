// import React, {useState} from 'react'
import { useState } from "react";
import Form from "../Form/Form";
import Login from "../Login/Login";
import "./Registration.css";

function Registration() {

    const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container-fluid reg">
      <div className="container pt-5">
      <div className="log-links d-flex justify-content-between w-25">
        <button  className={`text-light text-decoration-none login border-0 bg-transparent fs-3 fst-italic fw-bold ${isLogin ? "active-link" : ""}`}
        onClick={() => setIsLogin(true)}>Login</button>
        <button className={`text-light text-decoration-none regis border-0 bg-transparent fs-3 fst-italic fw-bold ${isLogin ? "active-link" : ""}`}
        onClick={() => setIsLogin(false)}>Register</button>
      </div>
        <div className="row align-items-center mt-5">
          
          <div className="col-lg-6">
           {isLogin ? <Login/> : <Form/>}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Registration;
