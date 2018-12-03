import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import {noop} from 'node-noop';

const Label = styled.label``;

const Input = styled.input``;

class InputComponent extends Component {
  static propTypes = {
    type: T.oneOf(['text', 'email', 'password']),
    label: T.string,
    placeholder: T.string,
    value: T.string,
    onChange: T.func,
    isDisabled: T.bool
  };

  static defaultProps = {
    type: 'text',
    placeholder: '',
    value: '',
    onChange: noop,
    isDisabled: false
  };

  render() {
    const { type, label, placeholder, value, onChange, isDisabled } = this.props;
    return (
      <Label>
        {Boolean(label) && label}
        <Input type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={isDisabled}/>
      </Label>
    );
  }
}

export default InputComponent;