import { cleanup, render, waitForElement } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { MediaProvider } from 'context';

beforeEach(cleanup);

describe('<App />', () => {
  it('renders the application before fetching data', () => {
    const { queryByTestId } = render(
      <Router>
        <MediaProvider>
          <App />
        </MediaProvider>
      </Router>
    );
    expect(queryByTestId('app')).toBeNull();
  });

  it('renders the application after fetching data', async () => {
    const { queryByTestId } = render(
      <Router>
        <MediaProvider>
          <App />
        </MediaProvider>
      </Router>
    );

    await waitForElement(() => queryByTestId('app'))
    expect(queryByTestId('app')).toBeTruthy();
  });
});
