import React from 'react';
import {mount} from 'enzyme';
import PasswordInputComponent from './PasswordInput.component';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('PasswordInput component', () => {
  it('should call onChange function', () => {
    const onChange = jest.fn();
    const Password = mount(<PasswordInputComponent onChange={onChange}/>);
    const passwordElement = Password.find('input[type="password"]');
    passwordElement.simulate('change', {target: 'test'});

    expect(passwordElement.length).toBe(1);
    expect(onChange).toHaveBeenCalled();
  });

  xit('should toggle text visibility', () => {
    const Password = mount(<PasswordInputComponent/>);
    const toggleElement = Password.find('input[type="checkbox"]');
    const passwordElement = Password.find('input[type="password"]');

    expect(toggleElement.length).toBe(1);
    expect(passwordElement.prop('type')).toBe('password');
    toggleElement.simulate('change', { target: { checked: false } });
    expect(passwordElement.prop('type')).toBe('text');
  })
});
