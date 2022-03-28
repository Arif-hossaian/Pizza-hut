import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
//
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import WebLayout from '../layout/WebLayout';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
