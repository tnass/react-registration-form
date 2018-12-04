import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import {noop} from 'node-noop';
import prop from 'lodash/fp/prop';

const Label = styled.label`
  margin: 15px 0;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  margin: 15px 0 0;
  padding: 20px 10px 20px;
  border: none;
  outline: none;
  font-size: ${prop('theme.fontSizes.medium')};
  color: ${prop('theme.colors.brand.grey')};
  background-color: ${prop('theme.colors.brand.white')};
`;

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