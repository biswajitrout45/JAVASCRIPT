import './Contact.css';


function Contact(){
    return(
        <div className="contact">
            <h1>Contact Us</h1>
            <form action="">
            <input type="text" name="Name" placeholder="Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="text" name="subject" placeholder="Subject" required/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
            </form>
            <button>Submit</button>
        </div>
    )
}export default Contact;