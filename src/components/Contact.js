
import React, { useState } from "react";


function Contact() {// Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    const inputType = name;
    const inputValue = value;
    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in

    if (inputType === 'email') {
      setEmail(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p>Contact Me </p>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <br />
        <br />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          rows="4" cols="50"
          placeholder="Message"
        />
        <br/>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );

}

export default Contact;