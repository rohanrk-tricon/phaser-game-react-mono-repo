import React from 'react';
import { shallow } from 'enzyme';
import GameOne from './Game1';

test('render a label', (): void => {
  const wrapper = shallow(<GameOne />);

  expect(wrapper).toMatchSnapshot();
});
