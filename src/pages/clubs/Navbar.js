import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/Contexts.jsx';

function Navbar () {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-black text-white flex flex-row">
      <h1>A list of Clubs!</h1>
      <ul className="absolute top-0 right-0 flex flex-row">
        <li className="pl-2 pr-2">
          {user}
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
          <Link href="/homepage">Home</Link>
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
          <Link href="/clubs/create">Create</Link>
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
        <Link href='/'>Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
