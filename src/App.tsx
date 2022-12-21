import React, {FC} from 'react';
import SwiperSlider from './components/swiperSlide/SwiperSlider';
import Layout from './layout/Layout';

const App: FC = () => {
  return (
    <Layout>
      <SwiperSlider />
    </Layout>
  );
};

export default App;
