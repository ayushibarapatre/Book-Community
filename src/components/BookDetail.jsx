import React from "react";
import { useParams } from "react-router-dom";
import books from "../data/books";
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div className="book-detail">
      <h1>{book.title}</h1>
      <img src={book.coverImage} alt={book.title} />
      <p><strong>Author:</strong> {book.author}</p>
      <a href={book.link} target="_blank" rel="noreferrer">Read Book</a>
    </div>
  );
};

export default BookDetail;
