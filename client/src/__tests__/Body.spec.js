import { cleanup, render } from '@testing-library/react';
import { MediaProvider } from 'context';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Body from '../components/layout/Body';

beforeEach(cleanup);
const AllTheWrappers = ({ children }) => {
  return (
    <MemoryRouter>
      <MediaProvider>{children}</MediaProvider>
    </MemoryRouter>
  );
};


describe('<Body />', () => {
  it('renders the <Body />', () => {
    const { queryByTestId } = render(<Body />, { wrapper: AllTheWrappers });
    expect(queryByTestId('body')).toBeTruthy();
  });
});
