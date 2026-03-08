import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import Terminal from './components/Terminal';

function App(){
  return(
    <>
      <BrowserRouter>
        <nav className="navbar">
          <div className="header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/terminal">Testimonials</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/terminal' element={<Terminal/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;