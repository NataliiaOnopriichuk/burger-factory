import { useMedia } from 'react-use';
import { useState } from 'react';
import { Button } from 'components/Button/Button';
import { Logo } from 'components/Logo/Logo';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { SiteNav } from 'components/SiteNav/SiteNav';
import style from './Header.module.scss';
import { navList } from 'utils/navList';

export const Header = () => {
  const isMobile = useMedia('(max-width: 767px)');

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navList[0]);

  const toggleModal = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const handleLinkClick = el => {
    setActiveLink(el);
    isMobile && toggleModal();
  };

  return (
    <header className={style.header}>
      <Logo type="header" active={setActiveLink}>
        {!isMobile && (
          <>
            <SiteNav activeLink={activeLink} close={handleLinkClick} />
            <div className={style.button}>
              <Button title="Order Now" type="order" />
            </div>
          </>
        )}
        {isMobile && (
          <MobileMenu
            {...{ isBurgerMenuOpen, toggleModal, activeLink, handleLinkClick }}
          />
        )}
      </Logo>
    </header>
  );
};
