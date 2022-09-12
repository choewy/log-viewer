import '@/App.css';

import { FC, Fragment } from 'react';
import { Footer } from '@/components/common';
import { useInitializer } from './hooks';
import { GNB } from './components/common/gnb';
import { AppRoutes } from './components/routes';

const App: FC = () => {
  useInitializer();
  return (
    <Fragment>
      <GNB />
      <AppRoutes />
      <Footer />
    </Fragment>
  );
};

export default App;
