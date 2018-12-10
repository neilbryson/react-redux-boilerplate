import React from 'react';
import { mount } from 'enzyme';

import Button from '../Button';

describe('Button component', () => {
  const label = 'test';

  it('should render without errors', () => {
    const wrapper = mount(<Button label={label} />);

    expect(wrapper).not.toBeEmptyRender();
    expect(wrapper).toHaveText(label);
  });
});
