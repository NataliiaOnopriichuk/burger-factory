import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { SiteNav } from 'components/SiteNav/SiteNav';
import { Button } from 'components/Button/Button';
import style from './MobileMenu.module.scss';

export const MobileMenu = memo(
  ({ isBurgerMenuOpen, toggleModal, activeLink, handleLinkClick }) => {
    return (
      <>
        <nav>
          <button type="button" className={style.menu} onClick={toggleModal}>
            <RxHamburgerMenu />
          </button>
        </nav>
        {isBurgerMenuOpen && (
          <div className={style.modal}>
            <button type="button" className={style.cross} onClick={toggleModal}>
              <RxCross1 />
            </button>
            <SiteNav
              type="menu"
              activeLink={activeLink}
              close={handleLinkClick}
            />
            <Button title="Order Now" type="order" />
          </div>
        )}
      </>
    );
  }
);

MobileMenu.propTypes = {
  isBurgerMenuOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  activeLink: PropTypes.string.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
};
