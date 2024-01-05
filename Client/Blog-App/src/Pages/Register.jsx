import React, { useState } from "react";
import Header from "../components/Header";
import "../App.css";
import { IoLogInSharp } from "react-icons/io5";
import { BiHide } from "react-icons/bi";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showpassword, setShowPassword] = useState(true);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    alert("Registered Successfully");
    setData({ username: "", email: "", password: "" });
  };

  const hideShowPassword = (e) => {
    e.preventDefault();
    if (showpassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  return (
    <div>
      <Header />

      <h2 className="register__Title">Register</h2>

      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleInput}
          value={data.username}
          placeholder="Enter Username"
          required
        />
        <input
          type="email"
          name="email"
          onChange={handleInput}
          value={data.email}
          placeholder="Enter Email"
          required
        />
        <div className="input__container">
          {showpassword ? (
            <input
              type="password"
              name="password"
              onChange={handleInput}
              value={data.password}
              placeholder="Enter Password"
              required
            />
          ) : (
            <input
              type="text"
              name="password"
              onChange={handleInput}
              value={data.password}
              placeholder="Enter Password"
              required
            />
          )}
          <button onClick={hideShowPassword} class="hide__button">
            <BiHide />
          </button>
        </div>
        <button type="submit">
          Signup <IoLogInSharp className="icon" />
        </button>
      </form>
    </div>
  );
};

export default Register;
