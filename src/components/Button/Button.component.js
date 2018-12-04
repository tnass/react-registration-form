import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import {noop} from 'node-noop'
import prop from 'lodash/fp/prop';

const Button = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  font-size: ${prop('theme.fontSizes.medium')};
  color: ${props => props.disabled ? prop('theme.colors.brand.grey') : prop('theme.colors.brand.white')};
  background-color: ${props => props.disabled ? prop('theme.colors.brand.lightGrey') : prop('theme.colors.brand.green')};
  box-shadow: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

class ButtonComponent extends Component {
  static propTypes = {
    type: T.oneOf(['button', 'submit', 'reset']),
    label: T.string,
    onClick: T.func,
    isDisabled: T.bool
  };

  static defaultProps = {
    type: 'submit',
    label: 'submit',
    onClick: noop,
    isDisabled: false
  };

  render() {
    const { type, label, onClick, isDisabled } = this.props;
    return (
      <Button type={type} onClick={onClick} disabled={isDisabled}>{label}</Button>
    );
  }
}

export default ButtonComponent;