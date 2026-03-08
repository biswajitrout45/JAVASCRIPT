import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

import Header from './component/Header';
import Contact from './component/contact';
import About from './component/About';
import Service from './component/service';
import Terminal from './component/terminal';

function App(){
  return(
    <>
      <BrowserRouter>
        <nav>
          <div>
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