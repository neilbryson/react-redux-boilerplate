import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  label: 'Button',
  onClick: null,
};

const Container = styled('button')`
  border: none;
  background-color: #1976d2;
  height: 20px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    opacity: 0.6;
  }
`;

const Button = ({ label, ...other }) => <Container {...other}>{label}</Container>;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
