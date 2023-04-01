import { Link } from 'react-scroll';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { useState } from 'react';
import style from './SiteNav.module.scss';
import { useMedia } from 'react-use';

const titleList = ['Ingredients', 'Story', 'Burgers', 'Location'];

export const SiteNav = ({ type, close }) => {
  const [activeLink, setActiveLink] = useState(titleList[0]);
  const isMobile = useMedia('(max-width: 767px)');

  const listClass = clsx({
    [style.list]: true,
    [style.menu]: type === 'menu',
  });

  const handleLinkClick = el => {
    !isMobile && setActiveLink(el);
    isMobile && close();
  };

  return (
    <nav>
      <ul className={listClass}>
        {titleList.map(el => (
          <li key={uuidv4()}>
            <Link
              className={clsx({
                [style.activeLink]: activeLink === el,
              })}
              onClick={() => {
                handleLinkClick(el);
              }}
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
