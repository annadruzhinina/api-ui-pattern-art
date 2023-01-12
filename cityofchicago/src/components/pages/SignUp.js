import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // your form submission logic here
    // ...
    // clear the form after submitting
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Sign Up</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <label htmlFor="password-confirm">Confirm Password:</label>
      <input
        type="password"
        id="password-confirm"
        name="password-confirm"
        value={passwordConfirm}
        onChange={(event) => setPasswordConfirm(event.target.value)}
        required
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}
export default SignUp;
