import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List'

describe('List component', () => {
  afterAll(() => cleanup());

  it('renders List', () => {
    const { asFragment } = render(<List
      history={[
        {
          url: "www.api1.com",
          method: "GET"
        }, {
          url: "www.api2.com",
          method: "PUT"
        }, {
          url: "www.api3.com",
          method: "GET"
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  })
});


