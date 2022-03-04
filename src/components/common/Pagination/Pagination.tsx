import classNames from 'classnames';

interface Props {
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}

const getRange = (start: number, end: number) => {
  return [...Array(end - start + 1)].map((_, i) => start + i);
};

export const Pagination = ({ currentPage, total, limit, onPageChange }: Props) => {
  const pages = total > 0 ? getRange(0, Math.ceil(total / limit) - 1) : [];
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className={classNames('page-item', { active: currentPage === page })} key={page} onClick={() => onPageChange(page)}>
            <a className="page-link">{page + 1}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
