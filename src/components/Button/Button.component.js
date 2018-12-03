import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import {noop} from 'node-noop'

const Button = styled.button``;

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