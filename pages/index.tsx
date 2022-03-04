import type { NextPage } from 'next';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { Banner, FeedTab } from '~/components/home';
import { ArticleList } from '~/components/article';
import { TagList } from '~/components/tag';
import { $isLogined } from '~/stores';

const Home: NextPage = () => {
  const isLogined = useRecoilValue($isLogined);

  return (
    <>
      <Head>
        <title>Home — Conduit</title>
      </Head>
      <div className="home-page">
        {!isLogined && <Banner />}

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
