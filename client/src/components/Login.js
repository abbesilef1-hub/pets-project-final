import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../JS/userSlice/userSlice";
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapper-login">
        <form onSubmit={(e) => e.preventDefault()} className="form-login">
          <h2 className="form-signin-heading">Please login</h2>
          <input
            type="text"
            className="form-control-login"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            className="form-control-login"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />

          <label className="checkbox-login">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember Me
          </label>
          <button
            className="btn btn-lg btn-primary btn-block bouton-login"
            onClick={() => {
              setTimeout(() => {
                dispatch(userLogin(login));
                navigate("/profil");
              }, 1000);
            }}
          >
            login
          </button>
          <h5 style={{marginTop:"30px"}} className="text-login">You Already Have Account <Link to="/register">Register now</Link>{" "}</h5>
        </form>
        <img src="https://png.pngtree.com/png-clipart/20240301/original/pngtree-cute-cat-with-balloon-hearts-for-valentine-png-image_14458992.png" alt="imagecat" className="img-pet-login"/>
        {/* <img src="https://png.pngtree.com/png-clipart/20250207/original/pngtree-adorable-kitten-with-heart-balloons-for-valentine-s-day-png-image_20382592.png" alt="cat" className="img-pet-login"/> */}
        {/* <img src="https://png.pngtree.com/png-vector/20250113/ourmid/pngtree-kitten-with-pink-bow-and-heart-collar-illustration-png-image_15168264.png" alt="imgpetlogin" className="img-pet-login"/> */}
        {/* <img src="https://png.pngtree.com/png-clipart/20220909/ourmid/pngtree-pink-red-cute-baloon-png-image_6144464.png" alt="baloncat" className="balloncat"/> */}
        {/* <img src="https://png.pngtree.com/png-vector/20241001/ourmid/pngtree-adorable-white-cat-in-bird-cage-surrounded-by-colorful-yarn-balls-png-image_13918992.png" alt="imgcatlog" className="img-cat-log"/> */}
      </div>
    </div>
  );
}

export default Login;