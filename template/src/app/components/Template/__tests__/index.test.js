import React from 'react';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';
import Template from '..';

const renderComponent = store =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <Template />
      </HelmetProvider>
    </Provider>,
  );

describe('<Template />', () => {
  let store;

  beforeEach(() => {
    store = configureAppStore();
  });
  it('should match the snapshot', () => {
    const component = renderComponent(store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
