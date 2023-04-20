import '@/styles/globals.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { UserProvider } from '../contexts/Contexts.jsx';

export default function App ({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </LocalizationProvider>
  );
}
