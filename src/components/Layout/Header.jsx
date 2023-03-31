import { useMedia } from 'react-use';
import { Link } from 'react-scroll';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'components/Button/Button';
import { Logo } from 'components/Logo/Logo';
import style from './Header.module.scss';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

export const Header = () => {
  const isMobile = useMedia('(max-width: 767px)');

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(true);
  };

  const handleCloseModalClick = () => {
    setIsBurgerMenuOpen(false);
  };

  const titleList = ['Ingredients', 'Story', 'Burgers', 'Location'];
  return (
    <header className={style.header}>
      <Logo type="header">
        {!isMobile && (
          <>
            <nav>
              <ul className={style.list}>
                {titleList.map(el => (
                  <li key={uuidv4()}>
                    <Link to={el} smooth={true} duration={200} offset={-130}>
                      {el}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={style.button}>
              <Button title="Order Now" type="order" />
            </div>
          </>
        )}
        {isMobile && (
          <nav>
            <button
              type="button"
              className={style.menu}
              onClick={handleBurgerMenuClick}
            >
              <RxHamburgerMenu />
            </button>
          </nav>
        )}
      </Logo>
    </header>
  );
};
