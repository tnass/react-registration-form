import React from 'react';
import {mount} from 'enzyme';
import RegistrationFormComponent from './RegistrationForm.component';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('RegistrationFormComponent component', () => {
  xit('should call onSubmit function', () => {
    const onSubmit = jest.fn();
    const RegistratoinForm = mount(<RegistrationFormComponent onSubmit={onSubmit}/>);

    const emailInputElement = RegistratoinForm.find('input[type="email"]');
    emailInputElement.simulate('change', { target: { value: 'test@test.de' } });

    const passwordInputElement = RegistratoinForm.find('input[type="password"]');
    passwordInputElement.simulate('change', { target: { value: 'superSECUREpassword123!"§' } });

    const submitButtonElement = RegistratoinForm.find('button');
    submitButtonElement.simulate('click');

    expect(onSubmit).toHaveBeenCalled();
  });
});
