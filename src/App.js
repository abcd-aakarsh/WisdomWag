import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Course from "./components/Course";

import "../index.css";
const Heading = () => {
  return (
    <>
      <Header />
      <Course />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
