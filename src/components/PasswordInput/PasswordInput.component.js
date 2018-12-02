import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import InputComponent from '../Input/Input.component';

const VisibilityToggle = styled.button.attrs({ type: 'button' })`
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
    const { label, placeholder } = this.props;
    return (
      <React.Fragment>
        <InputComponent type="password" placeholder={placeholder} label={label}/>
        <VisibilityToggle onClick={this.togglePasswordVisibility}/>
      </React.Fragment>
    );
  }
}

export default PasswordInputComponent;