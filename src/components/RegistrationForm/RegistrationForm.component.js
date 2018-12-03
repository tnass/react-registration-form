import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import curry from 'lodash/fp/curry'
import InputComponent from '../Input/Input.component';
import ButtonComponent from '../Button/Button.component';
import PasswordInputComponent from '../PasswordInput/PasswordInput.component';

const FormWrapper = styled.div``;

class RegistrationFormComponent extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired
  };

  static defaultProps = {};

  state = {
    isSubmitting: false,
    email: '',
    password: ''
  };

  handleSubmit = (evt) => {
    console.log('submit');

    // don't allow double submission
    if (this.state.isSubmitting) {
      return;
    }

    this.setState({
      isSubmitting: true
    });

    const promise = new Promise(this.props.onSubmit);

    promise.finally(() => {
      this.setState({
        isSubmitting: false
      });
    });

    evt.preventDefault();
  };

  handleInputChange = curry((name, evt) => {
    this.setState({ [name]: evt.target.value });
  });

  render() {
    const { isSubmitting, email, password } = this.state;

    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <InputComponent
            type={'email'}
            label={'Your e-mail address'}
            placeholder={'email'}
            value={email}
            onChange={this.handleInputChange('email')}
          />
          <PasswordInputComponent
            label={'Your password'}
            placeholder={'password'}
            value={password}
            onChange={this.handleInputChange('password')}
          />
          <ButtonComponent
            type={'submit'}
            label={'Submit'}
            isDisabled={isSubmitting}
          />
        </form>
      </FormWrapper>
    );
  }
}

export default RegistrationFormComponent;