import React, { useState } from 'react';

function Form ({ handleSubmitButtonClick }) {
  const [form, setForm] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    guests: undefined
  });
  const [valid, setValid] = useState(true);
  const [validEmail, setValidEmail] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const emailValidator = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.match(regex) === null) {
      setValidEmail(false);
      return false;
    } else {
      setValidEmail(true);
      return true;
    }
  };
  return (
    <>
      <form>
        <h1>Registration</h1>
        <input
          name='firstName'
          placeholder='First Name'
          onChange={handleChange}
        />
        <input
          name='lastName'
          placeholder='Last Name'
          onChange={handleChange}
        />
        <input
          name='email'
          placeholder='Email Address'
          onChange={handleChange}
        />
        {!validEmail && <div>Email must be valid.</div>}
        <input
          name='guests'
          placeholder='Numbers of Guests'
          onChange={handleChange}
        />
        {!valid && <div>Please fill out each field.</div>}
        <button
          onClick={(e) => {
            e.preventDefault();
            const isEmailValid = emailValidator(form.email);
            if (!form.firstName || !form.lastName || isEmailValid === false || !form.guests) {
              setValid(false);
            } else {
              setValid(true);
              handleSubmitButtonClick(form);
            }
          }}
        >Submit</button>
      </form>
    </>
  );
}

export default Form;
