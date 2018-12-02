import React, { Component } from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import noop from 'node-noop'


const Button = styled.button``;


class ButtonComponent extends Component {
  static propTypes = {
    type: T.oneOf(['button', 'submit', 'reset']),
    label: T.string,
    onClick: T.func
  };

  static defaultProps = {
    type: 'submit',
    label: 'submit',
    onClick: noop
  };

  render() {
    const {type, label, onClick} = this.props;
    return (
      <Button type={type} onClick={onClick}>{label}</Button>
    );
  }
}

export default ButtonComponent;