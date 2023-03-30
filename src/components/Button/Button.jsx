import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';
import clsx from 'clsx';

export const Button = ({ title, type }) => {
  const buttonClass = clsx({
    [style.button]: true,
    [style.buttonHero]: type === 'discover',
  });

  return (
    <button className={`${buttonClass} ${style.inner}`} type="button">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
