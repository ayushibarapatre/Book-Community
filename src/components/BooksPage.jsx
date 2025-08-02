// src/components/BooksPage.jsx
import React from "react";
import books from "../data/books";
import "./BooksPage.css"; // ✔ Custom CSS file

const BooksPage = () => {
  return (
    <div className="books-page">
      <h1 className="books-heading">Explore Books</h1>
      <div className="books-grid">
        {books.map((book) => (
          <a
            key={book.id}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="book-card"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="book-image"
            />
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">{book.author}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
