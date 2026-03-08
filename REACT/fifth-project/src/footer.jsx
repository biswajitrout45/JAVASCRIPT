import './footer.css'

function footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We provide high-quality services and products to help your business grow and succeed in the digital world.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="#facebook" className="social-icon">Facebook</a>
                        <a href="#twitter" className="social-icon">Twitter</a>
                        <a href="#linkedin" className="social-icon">LinkedIn</a>
                        <a href="#instagram" className="social-icon">Instagram</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                    <p>Address: 123 Business St, City, Country</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Your Company. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default footer;