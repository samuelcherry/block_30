import { apiLogIn } from "../API/apiCall";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = {
    email: email,
    password: password
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
    const response = await apiLogIn(user);

    if (response?.message === "Login successful!" && response.token) {
      const token = response.token;
      localStorage.setItem("current-user-key", token);
      console.log("Login successful. Token stored:", token);
      location.reload();
    } else {
      const errorMessage =
        response?.message || "An unexpected error occurred. Please try again.";
      setError(errorMessage);
      console.error("Login error:", errorMessage); // Debug
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label>
          Email:{" "}
          <input
            type={email}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>{" "}
        <label>
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
}
