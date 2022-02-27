import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { $isLogined } from '~/stores';

export const Header = () => {
  const isLogined = useRecoilValue($isLogined);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link href="">
          <a className="navbar-brand">conduit</a>
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link href="">
              <a className="nav-link active">Home</a>
            </Link>
          </li>
          {isLogined && (
            <>
              <li className="nav-item">
                <Link href="">
                  <a className="nav-link">
                    <i className="ion-compose"></i>&nbsp;New Article
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="">
                  <a className="nav-link">
                    <i className="ion-gear-a"></i>&nbsp;Settings
                  </a>
                </Link>
              </li>
            </>
          )}
          {!isLogined && (
            <>
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link">Sign in</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link">Sign up</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
