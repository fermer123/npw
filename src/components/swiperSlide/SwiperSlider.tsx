import React, {FC} from 'react';
import Slider from 'src/components/slider/Slider';
import {SwiperSlide} from 'swiper/react';
import {HERO_IMAGES} from '../constants/Api';
import style from './SwiperSlider.module.scss';

const SwiperSlider: FC = () => {
  return (
    <Slider slidesPerView={1}>
      {HERO_IMAGES.map((e, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={idx}>
          <img
            alt={e}
            // eslint-disable-next-line prefer-template
            src={process.env.PUBLIC_URL + `src/${e}`}
            className={style.swiper_slide}
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default SwiperSlider;
