import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/category-directory/category-directory.jsx";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
