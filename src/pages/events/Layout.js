import Link from 'next/link';
import Navbar from './Navbar.js';

function Layout ({ children }) {
  return (
    <main className="h-100%">
      <Navbar />
        <main>{children}</main>
    </main>
  );
}

export default Layout;
