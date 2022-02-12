import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner, FeedTab } from '~/components/home';
import { ArticleList } from '~/components/article';
import { TagList } from '~/components/tag';

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
              <TagList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
