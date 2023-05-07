import { React, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./auth.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:8081/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          Redirect("/");
        } else {
          alert("No Record Found!");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="auth_container">
        <div className="login_container">
          <div>
            <form class="form" onSubmit={handleSubmit}>
              <h2>Sign In</h2>

              <input
                type="email"
                placeholder="Your email"
                name="email"
                // autoComplete="off"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <input type="password" placeholder="Your password" />
              <button type="submit">Sign in</button>
              <p>or sign in with</p>

              <div class="socials">
                <img src="./images/icons/twitter.jpg" alt="" />
                <img src="./images/icons/facebook.png" alt="" />
                <img src="./images/icons/google.jpg" alt="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
