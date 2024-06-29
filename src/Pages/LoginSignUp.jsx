import React, { useState } from "react";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="Signup">
      <form className="Signup-form" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label htmlFor="username">
          <input
            className="Signup-input"
            type="text"
            placeholder="Name"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="email">
          <input
            className="Signup-input"
            placeholder="Enter your Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            className="Signup-input"
            placeholder="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="Signup-input" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginSignUp;
