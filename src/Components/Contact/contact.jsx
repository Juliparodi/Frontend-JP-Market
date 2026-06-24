import './contact.css';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect, useState} from "react";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  }

  useEffect(() => {
    setIsSubmitted(false)
  }, []);

  return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="contact-method">
            <FontAwesomeIcon icon={faWhatsapp}/>
            <span>WhatsApp: +54 1243568712</span>
          </div>
          <div className="contact-method email">
            <FontAwesomeIcon icon={faEnvelope}/>
            <span>Email: JPmarket@gmail.com</span>
          </div>
        </div>
        <div className="message-below">
          <h3>Or you can leave your message below and we will respond within 24
            hours</h3>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required/>

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Submit</button>
        </form>
        {isSubmitted &&
            <div className="congrats-message">
              <span>Message has been sent! We will contact you to in the provided email.</span>
            </div>}
      </div>
  );
}

export default Contact;
