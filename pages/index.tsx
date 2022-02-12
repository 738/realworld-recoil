import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner, FeedTab } from '~/components/atoms';
import { ArticleList } from '~/components/blocks';

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
              <ArticleList />
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
