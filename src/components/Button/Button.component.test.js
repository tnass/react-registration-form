import React from 'react';
import {shallow} from 'enzyme';
import ButtonComponent from './Button.component';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button component', () => {
  it('should call onClick function', () => {
    const onClick = jest.fn();
    const Button = shallow(<ButtonComponent onClick={onClick}/>);
    Button.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
