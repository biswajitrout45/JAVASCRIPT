import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App(){
    return(
        <>
            <BrowserRouter>
                <nav className="navbar">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="header">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;