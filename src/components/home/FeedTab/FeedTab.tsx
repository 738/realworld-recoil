import { useRecoilValue } from 'recoil';
import { $isLogined } from '~/stores/User.store';

export const FeedTab = () => {
  const isLogined = useRecoilValue($isLogined);

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isLogined && (
          <li className="nav-item">
            <a className="nav-link disabled" href="">
              Your Feed
            </a>
          </li>
        )}
        <li className="nav-item">
          <a className="nav-link active" href="">
            Global Feed
          </a>
        </li>
      </ul>
    </div>
  );
};
