import Link from 'next/link';
import Image from 'next/image';
import { components } from '~/@types';

export type Article = components['schemas']['Article'];
export type MultipleArticlesResponse = components['schemas']['MultipleArticlesResponse'];

interface Props {
  article: Article;
}

export const ArticlePreview = ({ article }: Props) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link href="profile.html" passHref>
          <Image alt="author-image" src={article.author.image} width="32" height="32" />
        </Link>
        <div className="info">
          <Link href="" passHref>
            <span className="author">{article.author.username}</span>
          </Link>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <Link href="" passHref>
        <span className="preview-link">
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <span>Read more...</span>
        </span>
      </Link>
    </div>
  );
};
