import React from "react";
import books from "./books";
import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <Link to={`/`}>
      <button>Home</button>
    </Link>
  );
};

export default Navigations;
