import { useRecoilState } from 'recoil';
import classNames from 'classnames';
import { $selectedTag } from '~/stores';
import { useAuth } from '~/hooks';

export const FeedTab = () => {
  const { isLogined } = useAuth();
  const [selectedTag, setSelectedTag] = useRecoilState($selectedTag);

  const handleGlobalFeedClick = () => {
    setSelectedTag(undefined);
  };

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {isLogined && (
          <li className="nav-item">
            <div className="nav-link disabled">Your Feed</div>
          </li>
        )}
        <li className="nav-item">
          <div className={classNames('nav-link', { active: !selectedTag })} onClick={handleGlobalFeedClick}>
            Global Feed
          </div>
        </li>
        {selectedTag && (
          <li className="nav-item">
            <div className="nav-link active"># {selectedTag}</div>
          </li>
        )}
      </ul>
    </div>
  );
};
