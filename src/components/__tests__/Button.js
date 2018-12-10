import React from 'react';
import { mount, shallow } from 'enzyme';

import Button from '../Button';

describe('Button component', () => {
  const label = 'test';

  it('should render without errors', () => {
    const wrapper = mount(<Button label={label} />);

    expect(wrapper).not.toBeEmptyRender();
    expect(wrapper).toHaveText(label);
  });

  describe('events', () => {
    let wrapper;
    const onClick = jest.fn();

    beforeAll(() => {
      wrapper = shallow(<Button label={label} onClick={onClick} />);
    });

    afterEach(() => {
      onClick.mockClear();
    });

    it('should call the onClick callback when clicked', () => {
      expect(onClick).not.toHaveBeenCalled();
      wrapper.simulate('click');
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should call the onClick callback when keypressed', () => {
      expect(onClick).not.toHaveBeenCalled();
      wrapper.simulate('keydown', { key: ' ' });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
