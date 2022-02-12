import Link from 'next/link';
import { Article } from '~/@types/Article';

interface Props {
  article: Article;
}

export const ArticlePreview = ({ article }: Props) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img alt="author-image" src={article.author.image} width="32" height="32" />
        </a>
        <div className="info">
          <a href="" className="author">
            {article.author.username}
          </a>
          <span className="date">{new Date(article.createdAt).toDateString()}</span>
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
