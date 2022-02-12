import { atom, selector } from 'recoil';
import { User } from '~/@types/User';

export const $user = atom<User | null>({
  key: 'userKey',
  default: null,
});

export const $isLogined = selector<boolean>({
  key: 'isLoginedKey',
  get: ({ get }) => {
    const user = get($user);
    return !!user;
  },
});
