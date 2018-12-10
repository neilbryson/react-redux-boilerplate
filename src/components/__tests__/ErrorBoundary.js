import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary component', () => {
  let wrapper;
  const child = <div>Look ma, no errors !</div>;

  beforeAll(() => {
    wrapper = shallow(<ErrorBoundary>{child}</ErrorBoundary>);
  });

  it('should render normally if there are no errors', () => {
    expect(wrapper).toContainReact(child);
    expect(wrapper).toHaveState('hasError', false);
  });

  it('should not render its children if there are errors', () => {
    wrapper.instance().componentDidCatch();
    expect(wrapper).not.toContainReact(child);
    expect(wrapper).toHaveState('hasError', true);
  });
});
