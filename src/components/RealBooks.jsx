// src/components/RealBooks.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import books from "../data/books"; // Make sure this is your static books.js
import "./RealBooks.css";

const RealBooks = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="realbooks-container">
      <div className="realbooks-header">
        <h2 className="realbooks-title">Explore Books</h2>
        <Link to="/books" className="see-all-link">See All</Link>
      </div>

      <div className="realbooks-scroll-wrapper">
        <button className="scroll-button left" onClick={() => scroll("left")}>◀</button>

        <div className="realbooks-row" ref={scrollRef}>
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <img src={book.coverImage} alt={book.title} />
              </a>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={() => scroll("right")}>▶</button>
      </div>
    </div>
  );
};

export default RealBooks;
