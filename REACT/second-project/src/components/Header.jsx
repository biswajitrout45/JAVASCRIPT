import './header.css';

function Header(){
    return(
        <header className="header">
            <div className='navbar'>
                <div className='logo'><h1>BISWA</h1></div>
                <nav className='menu'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Portfolio</a>
                    <a href="">Contact</a>
               </nav>
            </div>
        </header>
    )
}
export default Header;