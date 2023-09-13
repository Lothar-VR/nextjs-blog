import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const HistoryContext = createContext<string[]>(['', '']);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [history, setHistory] = useState([router.asPath, '']);

  useEffect(() => {
    setHistory([router.asPath, history[0]]);
  }, [router.asPath]);

  return (
  <HistoryContext.Provider value={history}>
    <Component {...pageProps} />
  </HistoryContext.Provider>
  )
}
