// import Image from 'next/image';
// import { Inter } from 'next/font/google';
import React, { useEffect, useState, useContext } from 'react';
import Layout from './Layout.js';
import Login from './login/index.jsx';
import { UserContext } from '../contexts/Contexts.jsx';
import { Aidan } from 'sample_user_data.js';
import * as data from 'sample_data.js';

// // this line of code sets up a font for tailwind
// const inter = Inter({ subsets: ['latin'] });

export default function Home () {
  const { user, setUser, clubs, setClubs } = useContext(UserContext);

  const handleLogin = ({ username, password }) => {
    // console.log('here', username);
    setUser(Aidan);
    setClubs(data);
  };

  return (
      <Layout>
        <Login handleLogin={handleLogin}/>
      </Layout>
  );
}
