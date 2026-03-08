import logo from '../assets/logo.svg'
import '../styles/header.css'
function Header(){
    return(
        <div className='header'>
            <div className='lef-header'>
                <img src={logo} alt="" />
                <h1>Nexcent</h1>
            </div>
            <nav className='right-header'>
                <a href="">Home</a>
                <a href="">Features</a>
                <a href="">Community</a>
                <a href="">Blog</a>
                <a href="">Pricing</a>
                <button>Register Now</button>
           </nav>
        </div>

    )
}

export default Header;