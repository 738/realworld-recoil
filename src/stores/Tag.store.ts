import axios from 'axios';
import { atom, selector } from 'recoil';
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

export const $selectedTag = atom<string | undefined>({
  key: 'selectedTagKey',
  default: undefined,
});
