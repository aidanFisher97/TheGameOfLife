import Link from 'next/link';

function Navbar () {
  return (
    <div className="bg-black text-white flex flex-row">
      <h1>The Game of Life</h1>
      <ul className="absolute top-0 right-0 flex flex-row">
        <li className="pr-2">
          <Link href="/homepage">Home</Link>
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
          <Link href="/personal/family">Family</Link>
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
          <Link href="/personal/social">Social</Link>
        </li>
        <p>|</p>
        <li className="pl-2 pr-2">
          <Link href="/personal/work">Work</Link>
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
