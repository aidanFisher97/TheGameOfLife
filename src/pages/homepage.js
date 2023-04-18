import Link from 'next/link';
import Layout from './Layout.js';

function Homepage () {
  return (
    <Layout>
      <div>
        <Link href="/clubs">Clubs</Link>
      </div>
      <div>
        <Link href="/personal">Personal</Link>
      </div>
    </Layout>
  );
}

export default Homepage;
