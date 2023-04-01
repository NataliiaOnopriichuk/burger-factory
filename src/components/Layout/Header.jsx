import { useMedia } from 'react-use';
import { Button } from 'components/Button/Button';
import { Logo } from 'components/Logo/Logo';
import style from './Header.module.scss';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SiteNav } from 'SiteNav/SiteNav';
import { RxCross1 } from 'react-icons/rx';

export const Header = () => {
  const isMobile = useMedia('(max-width: 767px)');

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <header className={style.header}>
      <Logo type="header">
        {!isMobile && (
          <>
            <SiteNav />
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
              onClick={handleMenuClick}
            >
              <RxHamburgerMenu />
            </button>
          </nav>
        )}
        {isMobile && isBurgerMenuOpen && (
          <div className={style.backdrop}>
            <div className={style.modal}>
              <button
                type="button"
                className={style.cross}
                onClick={handleMenuClick}
              >
                <RxCross1 />
              </button>
              <SiteNav type="menu" close={handleMenuClick} />
              <Button title="Order Now" type="order" />
            </div>
          </div>
        )}
      </Logo>
    </header>
  );
};
