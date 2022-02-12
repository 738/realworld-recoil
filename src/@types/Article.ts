import { components, operations } from '.';

export type Article = components['schemas']['Article'];
export type MultipleArticlesResponse = components['schemas']['MultipleArticlesResponse'];
export type GetArticlesParams = operations['GetArticles']['parameters']['query'];
