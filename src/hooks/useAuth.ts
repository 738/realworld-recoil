import { useCookie } from 'react-use';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { User } from '~/@types/User';
import { $user, $isLogined } from '~/stores';

export const useAuth = () => {
  const [token, updateToken, deleteToken] = useCookie('jwt');
  const setUser = useSetRecoilState($user);
  const isLogined = useRecoilValue($isLogined);

  const login = (user: User) => {
    updateToken(user.token);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    deleteToken();
  };

  return {
    token,
    login,
    logout,
    isLogined,
  };
};
