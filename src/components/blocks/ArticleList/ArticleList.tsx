import { useRecoilValueLoadable } from 'recoil';
import { ArticlePreview } from '~/components/atoms';
import { $aritcleList } from '~/stores';

export const ArticleList: React.FC = () => {
  const articlesLoadable = useRecoilValueLoadable($aritcleList);

  switch (articlesLoadable.state) {
    case 'hasValue':
      return (
        <>
          {articlesLoadable.contents.articles.map((article) => (
            <ArticlePreview key={article.slug} article={article} />
          ))}
        </>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw articlesLoadable.contents;
  }
};
