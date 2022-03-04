import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { UserResponse } from '~/@types/User';
import { useAuth } from '~/hooks';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { token, login } = useAuth();
  const { data, isLoading } = useQuery<UserResponse>(['/user'], { enabled: !!token });

  useEffect(() => {
    if (data?.user) login(data.user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  return <>{children}</>;
};
