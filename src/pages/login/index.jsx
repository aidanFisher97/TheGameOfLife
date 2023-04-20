import React, { useState } from 'react';
import Link from 'next/link';
import styles from './login.module.css';
import Image from 'next/image';
import BasicModal from './Modal.jsx';

function Login ({ handleLogin }) {
  const [modal, setModal] = useState(false);
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
      <Image
        src="/images/theGameOfLife.png"
        height={200}
        width={384}
        alt='App Title'
        className={styles.image}
      />
      <form className={styles.form} autoComplete='off'>
        <input
          placeholder="username"
          id='username'
          onChange={handleChange}
          className={styles.username}
        />
        <input
          placeholder="password"
          id='password'
          onChange={handleChange}
          className={styles.password}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleLogin(inputs);
          }}
          className={styles.submit}
          >
          <Link href="/profile">Login</Link>
        </button>
        <Link href="/login" className={styles.create}>Create An Account</Link>
        <button className={styles.google}>Sign in with Google</button>
      </form>
      <button
        onClick={() => { setModal(true); }}
        className={styles.link}
      >First Time Here? Check Out the Rules!</button>
      </div>
      {modal && <BasicModal modal={modal} setModal={setModal}/> }
    </div>
  );
}

export default Login;
