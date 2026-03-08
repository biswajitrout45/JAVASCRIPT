import React from 'react';
import './App.css';

function App(){
  return (
    <div className="form">
      <div className='up'>
        <h1>Contact Information Form</h1>
        <p>Please fill in all the fields</p>
      </div>
      <div className="down">
        <form action="" className="form-input">
          <label htmlFor="Name">Full Name:</label>
          <input type="text" id="Name" name="Name" placeholder="Enter your full name" required />
          <label htmlFor="Email">EmailAddress</label>
          <input type="email" id="email" name="email" placeholder="Enter your email id" required/>
          <label htmlFor="number">Phone Number</label>
          <input type="tel" id="number" name="number" placeholder="1234567890" required />
          <label htmlFor="website">Website url</label>
          <input type="url" id="website" name="website" placeholder="Enter the url" required />
          <label htmlFor="message">Additional Comments</label>
          <textarea id="message" name="message" placeholder="Share your thoughts here(minimum 10 characters)"></textarea>
          <button type='Submit' className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default App;