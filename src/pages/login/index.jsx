import React, { useState } from 'react';
import Link from 'next/link';

function Login ({ handleLogin }) {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  return (
    <form>
      <input
        placeholder="username"
        id='username'
        onChange={handleChange}
      />
      <input
        placeholder="password"
        id='password'
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleLogin(inputs);
        }}
      >
        <Link href="/clubs">Login</Link>
      </button>
    </form>
  );
}

export default Login;
