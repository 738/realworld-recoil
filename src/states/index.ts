import axios from 'axios';
import { selector } from 'recoil';
import { MultipleArticlesResponse } from '~/components/atoms';

export const aritcles = selector<MultipleArticlesResponse>({
  key: 'articles',
  get: async () => {
    try {
      const response = await axios.get('/api/articles');
      return response.data;
    } catch (e) {
      return [];
    }
  },
});
