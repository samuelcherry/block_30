import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigations = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      {" "}
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <Link to={`/account`}>
        <button>Account</button>
      </Link>
      <Link setToken={setToken} />
    </>
  );
};

export default Navigations;
