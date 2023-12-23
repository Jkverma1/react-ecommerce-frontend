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
      .post("http://3.129.65.105:8080/login", values)
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
            <form className="form" onSubmit={handleSubmit}>
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
              <input
                type="password"
                placeholder="Your password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <button type="submit">Sign In</button>
              <p>
                or
                <a href="/Sign-Up"> Sign up </a>
                with
              </p>

              <div className="socials">
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
