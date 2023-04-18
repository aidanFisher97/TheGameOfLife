// import Image from 'next/image';
// import { Inter } from 'next/font/google';
import React, { useEffect, useState, useContext } from 'react';
import Layout from './Layout.js';
import Login from './login/index.jsx';
import { UserContext } from '../contexts/Contexts.jsx';

// // this line of code sets up a font for tailwind
// const inter = Inter({ subsets: ['latin'] });

export default function Home () {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = ({ username, password }) => {
    console.log('here', username);
    setUser(username);
  };

  return (
      <Layout>
        <Login handleLogin={handleLogin}/>
      </Layout>
  );
}
