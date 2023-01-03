import React, {FC} from 'react';
import Slider from 'src/components/slider/Slider';
import {SwiperSlide} from 'swiper/react';
import {HERO_IMAGES} from '../constants/Api';
import style from './SwiperSlider.module.scss';

const SwiperSlider: FC = () => {
  return (
    <Slider slidesPerView={1} title='Slider'>
      {HERO_IMAGES.map((e, idx) => (
        <SwiperSlide key={idx}>
          <div
            style={{backgroundImage: `url(../../${e})`}}
            className={style.swiper_slide}
          />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default SwiperSlider;
