import React from 'react';
import { lazyLoad } from '../../utils/loadable';
import LoadingIndicator from '../../components/LoadingIndicator';

export default lazyLoad(
  () => require ('./index'),
  module => module.default,
  {
    fallback: (
      <LoadingIndicator />
    ),
  },
);
