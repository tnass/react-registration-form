import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import prop from 'lodash/fp/prop';
import InputComponent from '../Input/Input.component';

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const ToggleLabel = styled.label`
 position: absolute;
 bottom: 0;
 right: 0;
 cursor: pointer;

 ::before {
   content: '👁';
   position: absolute;
   bottom: 0;
   right: 0;
   padding: 15px 10px 14px;
   font-size: ${prop('theme.fontSizes.large')};
   background-color: ${prop('theme.colors.brand.white')};
   color: ${prop('theme.colors.brand.grey')}
 }
`;

const VisibilityToggle = styled.input.attrs({ type: 'checkbox' })`
 align-self: flex-end;
 cursor: pointer;
 opacity: 0;
 width: 0;
 height: 0;
`;

class PasswordInputComponent extends Component {
  static propTypes = {
    label: T.string,
    placeholder: T.string,
  };

  static defaultProps = {
    label: 'password',
    placeholder: 'password',
  };

  state = {
    isVisible: false
  };

  togglePasswordVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  };

  render() {
    const { label, placeholder, ...props } = this.props;
    const { isVisible } = this.state;

    return (
      <PasswordInputWrapper>
        <InputComponent type={isVisible ? 'text' : 'password'} placeholder={placeholder} label={label} {...props} />
        <ToggleLabel>
          <VisibilityToggle onChange={this.togglePasswordVisibility} value={isVisible} />
        </ToggleLabel>
      </PasswordInputWrapper>
    );
  }
}

export default PasswordInputComponent;