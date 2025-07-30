import React from "react";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";

const Nav = () => {
  const isSignedIn = false; // static for now

  return (
    <nav className="navbar">
      <div className="logo">
           Read<span className="verse-highlight">Verse</span>

      </div>

      <ul className="nav-links">
        <li><a href="#books" className="active">Books</a></li>
        <li><a href="#tracker">Tracker</a></li>
        <li><a href="#chatbot">Chatbot</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#community">Community</a></li>
      </ul>

      <div className="auth-section">
        {isSignedIn ? (
          <FaUserCircle className="profile-icon" />
        ) : (
          <div className="auth-buttons">
            <button className="signin-btn">Sign In</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
