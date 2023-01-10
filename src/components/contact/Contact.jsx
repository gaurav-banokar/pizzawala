import React from 'react'
import "./contact.scss";

const Contact = () => {
  return (
    <section className="contact allSection">
        <div className="contactContainer allSectionContainer">
        <h2>Contact Us</h2>

        <form >    
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />

        <textarea placeholder="Message..." cols="30" rows="10"></textarea>

        <button type="submit">Send</button>
        </form>

        </div>
    </section>
  )
}

export default Contact