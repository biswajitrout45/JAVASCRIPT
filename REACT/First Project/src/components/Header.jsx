import './header.css';


function Header(){
    return(
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h2>MyApp</h2>
                </div>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>

                </nav>
            </div>
        </header>
    )
}
export default Header;