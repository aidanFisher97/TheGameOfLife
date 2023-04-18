import Link from 'next/link';
import Layout from './Layout.js';

function Club () {
  return (
    <Layout>
      <div>About this club</div>
      {/* create a list of clubs */}
      <Link href="/clubs/club/events/info">Events</Link>
    </Layout>
  );
}

export default Club;
