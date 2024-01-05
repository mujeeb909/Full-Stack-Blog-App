import React from "react";
import "../App.css";
import Blogs from "../components/Blogs";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <main>
        <Header />
        <Blogs />
      </main>
    </div>
  );
};

export default Home;
