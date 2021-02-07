import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Resty from '../../containers/Resty';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Resty />);
    expect(asFragment()).toMatchSnapshot();
  });
});

