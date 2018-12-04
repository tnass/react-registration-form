import React, {Component} from 'react';
import styled from 'styled-components';
import T from 'prop-types';
import prop from 'lodash/fp/prop';
import {
  lowercaseLetterValidator,
  minCharValidator,
  numberValidator,
  specialCharValidator,
  uppercaseLetterValidator
} from './validators'

const CheckList = styled.ol`
  list-style: none;
  padding-left: 0;
  text-align: left;
`;

const CheckListItem = styled.li`
  padding: 8px;
`;

const Check = styled.span`
  color: ${props => (props.isChecked) ? prop('theme.colors.brand.green') : prop('theme.colors.brand.red')};

  ::before {
    content: '${props => (props.isChecked) ? '✓' : '✗'}';
  }
`;

const Label = styled.span`

`;

const CRITERIA = [
  { type: 'minChar', validator: minCharValidator, label: 'At least 8 characters' },
  { type: 'lowercase', validator: lowercaseLetterValidator, label: 'At least one lowercase character' },
  { type: 'uppercase', validator: uppercaseLetterValidator, label: 'At least one uppercase character' },
  { type: 'number', validator: numberValidator, label: 'At least one number' },
  { type: 'specialChar', validator: specialCharValidator, label: 'At least one special character' },
];

class PasswordStrengthMeterComponent extends Component {
  static propTypes = {
    password: T.string,
    onAfterValidation: T.func
  };

  static defaultProps = {
    password: ''
  };

  static getDerivedStateFromProps({ password }, prevState) {
    if (password !== prevState.password) {
      const criteriaStates = CRITERIA.reduce(
        (states, currentCriteria) => ({ ...states, [currentCriteria.type]: currentCriteria.validator(password) }),
        {}
      );
      return {
        password,
        criteriaStates,
        isStrongPassword: Object.keys(criteriaStates).every((key) => (criteriaStates[key])),
      }
    }

    return null;
  }

  state = {
    password: '',
    isStrongPassword: false,
    criteriaStates: {}
  };

  componentDidUpdate(prevProps, prevState) {
    if (typeof this.props.onAfterValidation === 'function' &&
        prevState.isStrongPassword !== this.state.isStrongPassword) {
      this.props.onAfterValidation(this.state.isStrongPassword);
    }
  }

  render() {
    const { criteriaStates } = this.state;
    return (
      <CheckList>
        {CRITERIA.map((criteria, i) => (
          <CheckListItem key={i}>
            <Check isChecked={criteriaStates[criteria.type]}/>
            <Label>{criteria.label}</Label>
          </CheckListItem>
        ))}
      </CheckList>
    );
  }
}

export default PasswordStrengthMeterComponent;