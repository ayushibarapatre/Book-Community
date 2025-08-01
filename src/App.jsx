import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Hero from './components/Hero';
import RealBooks from "./components/RealBooks";
import BookDetail from "./components/BookDetail";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <RealBooks />
            </>
          } />

          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
