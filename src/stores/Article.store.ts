import axios from 'axios';
import { selector } from 'recoil';
import { MultipleArticlesResponse } from '~/@types/Article';
import { $selectedTag } from '.';

export const $aritcleList = selector<MultipleArticlesResponse>({
  key: 'articleListKey',
  get: async ({ get }) => {
    const selectedTag = get($selectedTag);
    try {
      const response = await axios.get('/api/articles', { params: { tag: selectedTag } });
      return response.data;
    } catch (e) {
      return [];
    }
  },
});
