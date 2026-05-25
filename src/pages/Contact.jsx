import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if(name === "" || email === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Form Submitted Successfully");
  };

  return (
    <div className="contact">

      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Contact;