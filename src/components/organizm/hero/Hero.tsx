import React, {FC} from 'react';
import Slider from 'src/components/slider/Slider';
import {SwiperSlide} from 'swiper/react';
import style from './hero.module.scss';
const Hero: FC = () => {
  return (
    <Slider className={style.hero_container} slidesPerView={1}>
      <SwiperSlide>
        <div className={style.hero_container_swiper_slide}>qwe</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.hero_container_swiper_slide}>qwe</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.hero_container_swiper_slide}>qwe</div>
      </SwiperSlide>
    </Slider>
  );
};

export default Hero;
