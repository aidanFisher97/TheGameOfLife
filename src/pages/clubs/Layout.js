import Link from 'next/link';
import Navbar from './Navbar.js';
import Footer from '../Footer.js';

function Layout ({ children }) {
  return (
    <main className="h-100%">
      <Navbar />
        <main>{children}</main>
      <Footer />
    </main>
  );
}

export default Layout;
