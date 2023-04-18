import '@/styles/globals.css';
import { UserProvider } from '../contexts/Contexts.jsx';

export default function App ({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
