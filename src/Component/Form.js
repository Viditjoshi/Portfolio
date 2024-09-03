import "./FormStyle.css";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://portfolio-ef6a7-default-rtdb.firebaseio.com/UserQueary.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }, // Corrected the key to 'headers'
          body: JSON.stringify({ name, email, subject, message }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      toast.success("Your message has been submitted successfully!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="Form">
      <h1 className="formhading">Contact Form</h1>
      <form onSubmit={handleFormSubmit} method="POST">
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        ></input>
        <label>Your Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email id"
        ></input>
        <label>Your Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter Subject"
        ></input>
        <label>Your Message</label>
        <textarea
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
        ></textarea>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
