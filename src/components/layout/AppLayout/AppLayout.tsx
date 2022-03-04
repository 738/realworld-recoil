import axios from 'axios';
import { QueryClient, QueryClientProvider, QueryFunctionContext } from 'react-query';
import { RecoilRoot } from 'recoil';
import Cookies from 'js-cookie';
import { AuthProvider } from '~/components/provider';

interface Props {
  children: React.ReactNode;
}

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const token = Cookies.get('jwt');
  const { data } = await axios.get(`/api${queryKey[0]}`, {
    params: queryKey[1],
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

export const AppLayout = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AuthProvider>{children}</AuthProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};
