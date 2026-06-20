import React from 'react'
import './register.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { userRegister } from '../JS/userSlice/userSlice';
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [register, setregister] = useState({
        name: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div>
      <div className="wrapper-register">
        <img src='https://png.pngtree.com/png-clipart/20240723/original/pngtree-adorable-gray-kitten-and-happy-dog-on-a-white-background-cute-png-image_15619199.png' alt='imgpet' className='pet-image'/>
        <form onSubmit={(e) => {e.preventDefault(); dispatch(userRegister(register));}} className="form-signin-register">
          <h2 className="form-signin-heading-register">Please Register</h2>

          <input
            type="text"
            className="form-control-register"
            name="username"
            placeholder="Name"
            required=""
            autofocus=""
            onChange={(e) => setregister({...register, name: e.target.value})}
          />

          <input
            type="text"
            className="form-control-register"
            name="lastName"
            placeholder="Last Name"
            required=""
            autofocus=""
            onChange={(e) => setregister({...register, lastName: e.target.value})}
          />

          <input
            type="text"
            className="form-control-register"
            name="address"
            placeholder="Address"
            required=""
            autofocus=""
            onChange={(e) => setregister({...register, address: e.target.value})}
          />

          <input
            type="number"
            className="form-control-register"
            name="phone"
            placeholder="Phone"
            required=""
            autofocus=""
            onChange={(e) => setregister({...register, phone: e.target.value})}
          />

          <input
            type="text"
            className="form-control-register"
            name="username"
            placeholder="Email Adress"
            required=""
            autofocus=""
            onChange={(e) => setregister({...register, email: e.target.value})}
          />

          <input
            type="password"
            className="form-control-register"
            name="password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) => setregister({...register, password: e.target.value})}
          />

          {/* <label className="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />
            Remember Me
          </label> */}

          <button
            className="btn btn-lg btn-primary btn-block bouton-register"
            onClick={() => {
              dispatch(userRegister(register));
              navigate("/profil");
            }}
          >
            Register
          </button>
          <h6 className='text-register'>You Already Have Account <Link to="/login">Sign In</Link></h6>
        </form>
      </div>
    </div>
  )
}

export default Register