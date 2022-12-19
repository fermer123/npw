import React, {FC} from 'react';
import Hero from './components/organizm/hero/Hero';
import Layout from './layout/Layout';

const App: FC = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default App;
