import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    address_line_1: "",
    city: "",
    state: "",
    zipcode: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://3.129.65.105:8080/signup", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          Redirect("/login");
        } else {
          alert("No Record Found!");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="auth_container">
        <div className="login_container signup_container mt-10 mb-10">
          <div className="">
            <form className="signup-Form" onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div>
                <div className="flex-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    // autoComplete="off"
                    onChange={(e) =>
                      setValues({ ...values, first_name: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    // autoComplete="off"
                    onChange={(e) =>
                      setValues({ ...values, last_name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex-2">
                  <input
                    type="text"
                    placeholder="Address"
                    name="Address"
                    // autoComplete="off"
                    onChange={(e) =>
                      setValues({ ...values, address_line_1: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex-2">
                  <input
                    type="text"
                    placeholder="City"
                    name="City"
                    // autoComplete="off"
                    onChange={(e) =>
                      setValues({ ...values, city: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="State"
                    name="State"
                    // autoComplete="off"
                    onChange={(e) =>
                      setValues({ ...values, state: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Zipcode"
                    name="Zipcode"
                    // autoComplete="off"
                    onChange={(e) =>
                      setValues({ ...values, zipcode: e.target.value })
                    }
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="Phone"
                  // autoComplete="off"
                  onChange={(e) =>
                    setValues({ ...values, phone_number: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  // autoComplete="off"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  required
                />
                <input
                  type="password"
                  placeholder="Set password"
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  required
                />
              </div>

              <div className="signupBtn">
                <button type="submit">Sign Up</button>
              </div>
              <p>
                or
                <a href="/login"> Sign in </a>
                with
              </p>
              <div className="signUpSocials">
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

export default SignUp;
