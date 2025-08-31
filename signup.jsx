import React from "react";
import "./styles.css";

export default function Signup() {
  return (
    <div>
      <div className="bg-overlay"></div>
      <div className="glass-form">
        <h1 className="site-title">EventEase</h1>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}