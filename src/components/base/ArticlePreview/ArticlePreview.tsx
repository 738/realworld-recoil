import Image from 'next/image';
import { components } from '~/@types';

export type Article = components['schemas']['Article'];

interface Props {
  article: Article;
}

export const ArticlePreview = ({ article }: Props) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <Image alt="author-image" src={article.author.image} />
        </a>
        <div className="info">
          <a href="" className="author">
            {article.author.username}
          </a>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.slug}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
};
