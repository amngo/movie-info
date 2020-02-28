import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Movie from '../components/pages/Movie';
import { MediaProvider } from '../context';

beforeEach(cleanup);

const AllTheWrappers = ({ children }) => {
  return (
    <MemoryRouter>
      <MediaProvider>{children}</MediaProvider>
    </MemoryRouter>
  );
};

describe('<Movie />', () => {
  it('renders the <Loader /> before fetching data', () => {
    const { queryByTestId } = render(<Movie />, { wrapper: AllTheWrappers });
    expect(queryByTestId('movie')).toBeNull();
  });

  it('renders the <Movie /> after fetching data', () => {
    const { queryByTestId } = render(<Movie />, { wrapper: AllTheWrappers });
    expect(queryByTestId('movie')).toBeTruthy();
  });
});
