import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { ArticlePreview } from '~/components/base/ArticlePreview';
import { aritcles } from '~/states';

const Articles: React.FC = () => {
  const articlesLoadable = useRecoilValueLoadable(aritcles);
  console.log(articlesLoadable);

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

const Home: NextPage = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    Your Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>

            <Articles />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a href="" className="tag-pill tag-default">
                  programming
                </a>
                <a href="" className="tag-pill tag-default">
                  javascript
                </a>
                <a href="" className="tag-pill tag-default">
                  emberjs
                </a>
                <a href="" className="tag-pill tag-default">
                  angularjs
                </a>
                <a href="" className="tag-pill tag-default">
                  react
                </a>
                <a href="" className="tag-pill tag-default">
                  mean
                </a>
                <a href="" className="tag-pill tag-default">
                  node
                </a>
                <a href="" className="tag-pill tag-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
