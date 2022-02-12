import axios from 'axios';
import { selector } from 'recoil';
import { TagsResponse } from '~/@types/Tag';

export const $tagList = selector<TagsResponse>({
  key: 'tagListKey',
  get: async () => {
    try {
      const response = await axios.get('/api/tags');
      return response.data;
    } catch (e) {
      return [];
    }
  },
});
