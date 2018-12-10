import React from 'react';
import { shallow } from 'enzyme';

import clickable from '../clickable';

describe('clickable HOC', () => {
  const Component = () => <button>Click</button>;
  const WrappedComponent = clickable(Component);

  it('should add onClick and onKeyDown props to wrapped components', () => {
    const wrapper = shallow(<WrappedComponent />);

    expect(wrapper).toHaveProp('onClick');
    expect(wrapper).toHaveProp('onKeyDown');
  });

  describe('events', () => {
    let wrapper;
    const onClick = jest.fn();

    beforeAll(() => {
      wrapper = shallow(<WrappedComponent onClick={onClick} />);
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
