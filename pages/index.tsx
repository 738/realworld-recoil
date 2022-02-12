import type { NextPage } from 'next';
import Head from 'next/head';
import { useRecoilValueLoadable } from 'recoil';
import { ArticlePreview, Banner, FeedTab } from '~/components/atoms';
import { aritcles } from '~/states';

const Articles: React.FC = () => {
  const articlesLoadable = useRecoilValueLoadable(aritcles);

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
    <>
      <Head>
        <title>Home — Conduit</title>
      </Head>
      <div className="home-page">
        <Banner />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedTab />
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
    </>
  );
};

export default Home;
