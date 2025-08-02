// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import RealBooks from "./components/RealBooks";
import BookDetail from "./components/BookDetail";
import BooksPage from "./components/BooksPage"; // ✅ This is needed

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <RealBooks />
              </>
            }
          />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
