import { useRecoilValueLoadable } from 'recoil';
import { ArticlePreview } from '..';
import { $aritcleList } from '~/stores';

export const ArticleList: React.FC = () => {
  const articleListLoadable = useRecoilValueLoadable($aritcleList);

  switch (articleListLoadable.state) {
    case 'hasValue':
      return (
        <>{articleListLoadable.contents.articles?.map((article) => <ArticlePreview key={article.slug} article={article} />) ?? null}</>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw articleListLoadable.contents;
  }
};
