import React from "react";
import "./styles.css"; 

const LoginPage = () => {
  return (
    <div>
      <div className="bg-overlay"></div>
      <div className="glass-form">
        <h1 className="site-title">EventEase</h1>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p>
            Don&apos;t have an account?{" "}
            <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;