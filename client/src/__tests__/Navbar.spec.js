import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';

beforeEach(cleanup);

describe('<Navbar />', () => {
  it('renders the <Navbar />', () => {
    const { queryByTestId } = render(<Navbar />, { wrapper: MemoryRouter });
    expect(queryByTestId('navbar')).toBeTruthy();
  });
});
