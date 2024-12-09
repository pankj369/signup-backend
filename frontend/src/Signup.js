import React from "react";
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";
import  { useState } from 'react';

function Signup() {
  const[values, setValues] = React.useState({
    name: "",
    phone: "",  // mandatory to signUp
    email: "",
    password: "",
  })
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
      <div className="bg-white p-3 rounded  w-60">
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required onChange={handleInput}
            />
          
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone No.
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Enter your phone number"
              required onChange={handleInput}
            /> 
            {errors.phone && <span className="text-danger">{errors.phone}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required onChange={handleInput}
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              required onChange={handleInput}
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type="submit" className="btn btn-success w-100 mt-4">
            Sign Up
          </button>
          <p className="mt-3 text-center">Already have an account?</p>
          <Link
            to="./Login"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Signup;