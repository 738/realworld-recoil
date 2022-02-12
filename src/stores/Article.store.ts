import axios from 'axios';
import { selector } from 'recoil';
import { MultipleArticlesResponse } from '~/@types/Article';

export const $aritcleList = selector<MultipleArticlesResponse>({
  key: 'articleListKey',
  get: async () => {
    try {
      const response = await axios.get('/api/articles');
      return response.data;
    } catch (e) {
      return [];
    }
  },
});
