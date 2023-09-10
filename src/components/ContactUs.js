import React from "react";
import ContactImg from "./images/contact.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navs/Navbar";
import Footer from "./navs/Footer";
import "../styles/contacts.css";
import { CONTACTS_URL } from "./API";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const msgChangeHandler = (event) => {
    setMsg(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    const contactDetails = {
      name: name,
      email: email,
      mesage: msg,
    };

    fetch(CONTACTS_URL, {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: { "Content-Type": "application/json" },
    });

    setName("");
    setEmail("");
    setMsg("");

    navigate("/Homepage");
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${ContactImg})` }}
        ></div>
        <div className="rightSide">
          <h1> Contact Us</h1>

          <form id="contact-form" onSubmit={submitHandler}>
            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              placeholder="Enter full name..."
              type="text"
              onChange={nameChangeHandler}
              value={name}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="Enter email..."
              type="email"
              required
              onChange={emailChangeHandler}
              value={email}
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
              onChange={msgChangeHandler}
              value={msg}
            ></textarea>
            <button type="submit"> Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
