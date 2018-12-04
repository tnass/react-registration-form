import React from 'react';
import {mount} from 'enzyme';
import InputComponent from './Input.component';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Input component', () => {
  it('should call onChange function', () => {
    const onChange = jest.fn();
    const Input = mount(<InputComponent onChange={onChange}/>);
    expect(Input.find('input').length).toBe(1);
    Input.find('input').simulate('change', {target: 'test'});
    expect(onChange).toHaveBeenCalled();
  });
});
