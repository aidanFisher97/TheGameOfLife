import Link from 'next/link';
import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/Contexts.jsx';

function Navbar () {
  const { user } = useContext(UserContext);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  setInterval(() => {
    setCurrentTime(new Date().toLocaleString());
  }, 1000);

  return (
    <div className="bg-[#a0c4ff] text-white flex flex-row">
      <p>{currentTime}</p>
      <ul className="absolute top-0 right-0 flex flex-row">
        <li className="pl-2 pr-2">
          <Link href="/events">Events</Link>
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
          <Link href="/leaderboard">Leaderboard</Link>
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
          <Link href="/profile/settings">Settings</Link>
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
