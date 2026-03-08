import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <h2>Logo</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;