import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import style from './SiteNav.module.scss';
import { navList } from 'utils/navList';

export const SiteNav = ({ type, activeLink, close }) => {
  const listClass = clsx({
    [style.list]: true,
    [style.menu]: type === 'menu',
  });

  return (
    <nav>
      <ul className={listClass}>
        {navList.map(el => (
          <li key={uuidv4()}>
            <Link
              className={clsx({
                [style.activeLink]: activeLink === el,
              })}
              onClick={() => close(el)}
              to={el}
              smooth={true}
              duration={200}
              offset={-130}
            >
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

SiteNav.propTypes = {
  type: PropTypes.string,
  activeLink: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
