import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { UserResponse } from '~/@types/User';
import { Header, Footer } from '~/components/common';
import { AppLayout } from '~/components/layout';
import { $user } from '~/stores';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Conduit</title>
      </Head>
      <AppLayout>
        <AuthProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </AppLayout>
    </>
  );
}

export default MyApp;

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data, isLoading } = useQuery<UserResponse>(['/user']);
  const setUser = useSetRecoilState($user);
  useEffect(() => {
    if (data?.user) setUser(data.user);
  }, [data, setUser]);
  if (isLoading) return <div>Loading...</div>;
  return <>{children}</>;
};
