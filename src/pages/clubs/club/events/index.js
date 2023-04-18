import Link from 'next/link';
import Layout from './Layout.js';

function Events () {
  return (
    <Layout>
      {/* Create a list of events. On click go to details */}
      <div>
        <Link href="/clubs/club/events/info" />
        Events
      </div>
    </Layout>
  );
}

export default Events;
