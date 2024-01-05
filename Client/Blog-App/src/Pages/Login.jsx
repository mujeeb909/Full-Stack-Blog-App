import React from "react";
import Header from "../components/Header";
import "../App.css";
import { IoLogInSharp } from "react-icons/io5";

const Login = () => {
  return (
    <div>
      <Header />
      <h2 className="login__Title">Login</h2>

      <form action="">
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button type="submit">
          Login <IoLogInSharp className="icon" />
        </button>
      </form>
    </div>
  );
};

export default Login;
