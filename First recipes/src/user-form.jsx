import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./user-form.css";

const SignUpForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [childname, setChildName] = useState("");
  const [childage, setChildAge] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function validateForm() {
    if (username.length == 0) {
      alert(" usernamecan not be empty");
      return false;
    }

    if (email.length == 0) {
      alert("Email Address can not be empty");
      return false;
    }

    if (password.length < 8) {
      alert(" Password must contain greater than or equal to 8 characters.");
      return false;
    }
    if (childname.length == 0) {
      alert(" childname can not be empty");
      return false;
    }

    if (childage.length == 0) {
      alert(" childage can not be empty");
      return false;
    }
    return true;
  }

  const updateUserName = (e) => {
    setUserName(e.target.value);
    setSubmitted(false);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const updateChildName = (e) => {
    setChildName(e.target.value);
    setSubmitted(false);
  };

  const updateChildAge = (e) => {
    setChildAge(e.target.value);
    setSubmitted(false);
  };

  const clearForm = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setChildName("");
    setChildAge("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidForm = validateForm();

    if (!isValidForm) {
      setError(true);
      setSubmitted(false);
    } else {
      const postURL = "http://localhost:3000/signup";
      const res = await fetch(postURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: username,
          email: email,
          password: password,
          childName: childname,
          childAge: childage,
        }),
      });
      if (res.status === 200) {
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

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {username} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <>
      <div className="form">
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <fieldset>
            <div className="Field">
              <label className="label">Username</label>
              <input
                onChange={updateUserName}
                className="input"
                value={username}
                type="text"
                placeholder="username"
              />
            </div>

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
                required
                onChange={updatePassword}
                className="input"
                value={password}
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="Field">
              <label className="label">Child's Name</label>
              <input
                required
                onChange={updateChildName}
                className="input"
                value={childname}
                type="text"
                placeholder="Child's Name"
              />
            </div>
            <div className="Field">
              <label className="label">Child's Age</label>
              <input
                required
                onChange={updateChildAge}
                className="input"
                value={childage}
                type="text"
                placeholder="Child's Age"
              />
            </div>
          </fieldset>
          <button
            onClick={(e) => handleSubmit(e)}
            className="btn"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
