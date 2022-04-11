import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Counter from "./components/counter";
import Navigation from "./routes/navigation/navigation.component.";
import Hueta from "./components/hueta/hueta.component";

const App = () => {
  const categories = [
    {
      title: "Home",
      id: 1,
      href: "/",
    },
    {
      title: "Shop",
      id: 2,
      href: "shop",
    },
    {
      title: "Counter",
      id: 3,
      href: "counter",
    },
    {
      title: "Hueta",
      id: 4,
      href: "hueta",
    },
    {
      title: "Sign In",
      id: 4,
      href: "signin",
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<Navigation categs={categories} />}>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="hueta" element={<Hueta />} />
      </Route>
    </Routes>
  );
};

export default App;
