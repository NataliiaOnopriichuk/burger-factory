import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

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
  type: PropTypes.string.isRequired,
};
