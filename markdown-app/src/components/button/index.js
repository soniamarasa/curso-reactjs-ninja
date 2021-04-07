import React from 'react';
import PropTypes from 'prop-types';
//import css from 'strclass'; //lib para classes de css dinâmicas
import './button.css';

const Button = ({ onClick, children, kind }) => (
  <button onClick={onClick} className={kind}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['success', 'danger']),
};

export default Button;
