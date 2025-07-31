import Nav from './components/Navbar';
import Hero from './components/Hero';
import RealBooks from "./components/RealBooks";


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      {/* <BookSection /> */}
      <RealBooks />


    </div>
  );
}

export default App;
