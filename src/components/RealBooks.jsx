import React, { useRef } from "react";
import "./RealBooks.css";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    link: "https://openlibrary.org/works/OL26331930W/The_Great_Gatsby",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    coverImage: "https://covers.openlibrary.org/b/id/153541-L.jpg",
    link: "https://openlibrary.org/works/OL7343621W/1984",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    link: "https://openlibrary.org/works/OL14991621W/Pride_and_Prejudice",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "https://covers.openlibrary.org/b/id/8305836-L.jpg",
    link: "https://openlibrary.org/works/OL82563W/To_Kill_a_Mockingbird",
  },
  {
    id: 5,
    title: "Moby Dick",
    author: "Herman Melville",
    coverImage: "https://covers.openlibrary.org/b/id/7222251-L.jpg",
    link: "https://openlibrary.org/works/OL54120W/Moby_Dick",
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    coverImage: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    link: "https://openlibrary.org/works/OL262758W/The_Hobbit",
  },
  {
    id: 7,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    coverImage: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    link: "https://openlibrary.org/works/OL15176987W/Jane_Eyre",
  },
  {
    id: 8,
    title: "War and Peace",
    author: "Leo Tolstoy",
    coverImage: "https://covers.openlibrary.org/b/id/7222161-L.jpg",
    link: "https://openlibrary.org/works/OL27619W/War_and_Peace",
  }
];

function RealBooks() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="realbooks-container">
      <h2 className="realbooks-title">Explore Books</h2>

      <div className="realbooks-search">
        <input type="text" placeholder="Search books..." />
        <button>Search</button>
      </div>

      <div className="realbooks-row-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>&lt;</button>

        <div className="realbooks-row" ref={scrollRef}>
          {books.map((book) => (
            <a
              className="book-card"
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              key={book.id}
            >
              <img className="book-cover" src={book.coverImage} alt={book.title} />
              <div className="book-title">{book.title}</div>
              <div className="book-author">{book.author}</div>
            </a>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
}

export default RealBooks;
