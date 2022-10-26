import React from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l7zlpla",
        "template_nkczno9",
        form.current,
        "PI6eAkKz5d7QISfJB"
      )
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>deepubisht2004@gmail.com</h5>
            <a href="mailto:deepubisht2004@gmail.com" target="_blank">
              send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 8595867440</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8595867440"
              target="_blank"
            >
              send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
