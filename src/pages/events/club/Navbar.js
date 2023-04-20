import Link from 'next/link';

function Navbar () {
  return (
    <div className="flex flex-row bg-black text-white">
      <h1>Club Events</h1>
      <ul className="absolute top-0 right-0 flex flex-row">
        <li className="pl-2 pr-2">
          <Link href="/">Home</Link>
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
          {/* Join this club with the following link */}
          <Link href="/clubs/club/register">Join</Link>
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
          {/* Create an event in this club */}
          <Link href="/clubs/club/events/register">Create Event</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
