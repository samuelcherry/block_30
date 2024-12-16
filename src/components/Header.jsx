import React from "react";
import Navigations from "./Navigation";

export default function Header() {
  const userKey = localStorage.getItem("current-user-key");
  function logOut() {
    localStorage.setItem("current-user-key", "");
    location.reload();
  }

  return (
    <div className="header">
      <h1>Book Buddy</h1>
      <Navigations />
      {userKey && <button onClick={logOut}>Logout</button>}
    </div>
  );
}
