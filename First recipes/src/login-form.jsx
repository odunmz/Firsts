import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function validateForm() {
    if (email.length == 0) {
      alert("Email Address  field can not be empty");
      return false;
    }
    if (password.length == 0) {
      alert("Password field can not be empty");
      return false;
    }
    return true;
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidForm = validateForm();

    if (!isValidForm) {
      setError(true);
      setSubmitted(false);
    } else {
      const loginUrl = "http://localhost:3000/login";

      const res = await axios.post(loginUrl, {
        email: email,
        password: password,
      });

      if (res.status === 200) {
        localStorage.setItem("userInfo", JSON.stringify(res.data));

        setSubmitted(true);
        setError(false);
        clearForm();
        navigate("/dashboard");
      } else {
        console.log("error ", res.body);
        setError(true);
        setSubmitted(false);
      }
      console.log({ res }, res.status);
    }
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <fieldset>
            <div className="Field">
              <label className="label">Email</label>
              <input
                onChange={updateEmail}
                className="input"
                value={email}
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="Field">
              <label className="label">Password</label>
              <input
                onChange={updatePassword}
                className="input"
                value={password}
                type="password"
                placeholder="Password"
              />
            </div>
          </fieldset>
          <button
            onClick={(e) => handleSubmit(e)}
            className="btn"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
