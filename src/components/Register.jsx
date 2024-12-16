import { useEffect, useState } from "react";
import { register } from "../API/apiCall";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      setResponse({ message: "Email and Password needed" });
    } else {
      const response = await register(user);
      setResponse(response);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <label>
          First Name:
          <input
            type="text"
            id="first-name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </label>{" "}
        <label>
          Last Name:
          <input
            type="text"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </label>{" "}
        <label>
          Email:
          <input
            type="email"
            id="newEmail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>{" "}
        <label>
          Password:
          <input
            type="password"
            id="newPassword"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>register</button>
      </form>
      {response && <h4>{response.message}</h4>}
    </>
  );
}
