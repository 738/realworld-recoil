import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { ArticlePreview } from '..';
import { $aritcleList, $articleOffset, DEFAULT_LIMIT } from '~/stores';
import { Pagination } from '~/components/common';

export const ArticleList: React.FC = () => {
  const articleListLoadable = useRecoilValueLoadable($aritcleList);
  const [articeOffset, setArticleOffset] = useRecoilState($articleOffset);

  const handlePageChange = (page: number) => {
    setArticleOffset(page * DEFAULT_LIMIT);
  };

  switch (articleListLoadable.state) {
    case 'hasValue':
      const { articles, articlesCount: total } = articleListLoadable.contents;
      const showPagination = total > DEFAULT_LIMIT;
      return (
        <>
          {articles?.map((article) => <ArticlePreview key={article.slug} article={article} />) ?? null}{' '}
          {showPagination && (
            <Pagination total={total} limit={DEFAULT_LIMIT} currentPage={articeOffset / DEFAULT_LIMIT} onPageChange={handlePageChange} />
          )}
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw articleListLoadable.contents;
  }
};
