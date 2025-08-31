import React from "react";
import "../styles/styles.css";

export default function Landing2() {
  return (
    <>
      <header className="navbar">
        <div className="logo">🎊 EventEase</div>
        <nav>
          <a href="#">Home</a>
          <a href="/login">Login</a>
          <a href="/signup" className="btn-primary">Sign Up</a>
        </nav>
      </header>

      <section className="hero">
        <h1>🎉 Your Event, Our Expertise</h1>
        <p>EventEase connects you with trusted managers, vendors, and everything you need to make your event memorable.</p>
        <a href="#services" className="btn-primary">Get Started</a>
        <a href="#features" className="btn-secondary">Learn More</a>
      </section>

      <section className="container">
        <h2>💡 Why Choose EventEase?</h2>
        <div className="features">
          <div className="feature"><h3>🤵 Expert Managers</h3><p>Handpicked event professionals at your service.</p></div>
          <div className="feature"><h3>🎀 Complete Packages</h3><p>All-inclusive solutions for stress-free planning.</p></div>
          <div className="feature"><h3>💳 Secure Payments</h3><p>Safe and reliable booking & payment process.</p></div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 EventEase. All Rights Reserved.</p>
      </footer>
    </>
  );
}