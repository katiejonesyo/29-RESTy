
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import History from './History'

describe('History component', () => {
  afterAll(() => cleanup());

  it('renders History', () => {
    const { asFragment } = render(<History
      url="www.url.com"
      method="GET"
    />);
    expect(asFragment()).toMatchSnapshot();
  })
});


