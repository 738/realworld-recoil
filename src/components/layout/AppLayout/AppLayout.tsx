import axios from 'axios';
import { QueryClient, QueryClientProvider, QueryFunctionContext } from 'react-query';
import { RecoilRoot } from 'recoil';

interface Props {
  children: React.ReactNode;
}

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const { data } = await axios.get(`/api${queryKey[0]}`, { params: queryKey[1] });
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
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  );
};
