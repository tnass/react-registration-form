import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import InputComponent from '../Input/Input.component';

const VisibilityToggle = styled.input.attrs({ type: 'checkbox' })`
  ::before {
    content: '👁';
  }
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
      <React.Fragment>
        <InputComponent type={isVisible ? 'text' : 'password'} placeholder={placeholder} label={label} {...props} />
        <VisibilityToggle onChange={this.togglePasswordVisibility} value={isVisible} />
      </React.Fragment>
    );
  }
}

export default PasswordInputComponent;