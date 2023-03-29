import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

export const Button = ({ title }) => {
  return (
    <button className={style.button} type="button">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
