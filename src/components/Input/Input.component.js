import React, { Component } from 'react';
import styled from 'styled-components';
import T from 'prop-types';


const Label = styled.label``;

const Input = styled.input``;


class InputComponent extends Component {
  static propTypes = {
    type: T.oneOf(['text', 'email', 'password']),
    label: T.string,
    placeholder: T.string,
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    const {type, label, placeholder} = this.props;
    return (
      <Label>
        {Boolean(label) && label}
        <Input type={type} placeholder={placeholder} />
      </Label>
    );
  }
}

export default InputComponent;