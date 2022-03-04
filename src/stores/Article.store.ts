import axios from 'axios';
import { atom, selector } from 'recoil';
import { MultipleArticlesResponse } from '~/@types/Article';
import { $selectedTag } from '.';

export const DEFAULT_LIMIT = 2;

export const $aritcleList = selector<MultipleArticlesResponse>({
  key: 'articleListKey',
  get: async ({ get }) => {
    const tag = get($selectedTag);
    const offset = get($articleOffset);
    try {
      const response = await axios.get('/api/articles', { params: { tag, offset, limit: DEFAULT_LIMIT } });
      return response.data;
    } catch (e) {
      return [];
    }
  },
});

export const $articleOffset = atom<number>({
  key: 'articlePageKey',
  default: 0,
});
