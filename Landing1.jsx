import React from "react";
import "../styles/styles.css";

export default function Landing1() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-content">
          <h1 className="logo">🎊 EventEase</h1>
          <nav>
            <a href="#">🏠 Home</a>
            <a href="/login">🔑 Login</a>
            <a href="/signup" className="btn-primary">✨ Sign Up</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <h2>🎉 Plan Your Perfect Event with Ease</h2>
        <p>Discover trusted event managers, compare essential items with details and pricing, and book everything you need to make your celebration stress-free.</p>
        <a href="#managers" className="btn-primary">👔 Find Your Event Manager</a>
        <a href="#items" className="btn-secondary">🎁 Explore Event Items</a>
      </section>

      <section className="glass container">
        <h2>💡 Why Choose EventEase?</h2>
        <div className="feature-grid">
          <div className="feature">🤵 Browse experienced event managers near you</div>
          <div className="feature">🎀 Compare event items & packages with details & pricing</div>
          <div className="feature">💳 Easy booking and secure payments</div>
          <div className="feature">⭐ Reviews & ratings to help you choose the best</div>
          <div className="feature">⏳ Save time & stress with everything in one place</div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 EventEase. All rights reserved.</p>
      </footer>
    </>
  );
}