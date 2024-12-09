import React from "react";
import  { useState } from 'react';
import { Link } from "react-router-dom";
import './LoginValidation';
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
   const [errors, setErrors] = useState({});
    const handleInput = (event) => {
     setValues(prev=> ({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 w-100">
      <div className="bg-white p-3 rounded w-60">
        <h2>Log In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email "
              required onChange={handleInput}
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              required onChange={handleInput}
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type="submit" className="btn btn-success w-100 mt-4">
            Log In
          </button>
          <p className="mt-3 text-center">Don't have an account?</p>
          <Link
            to="./Signup"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
