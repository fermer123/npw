import React, {FC} from 'react';
import Slider from 'src/components/slider/Slider';
import {SwiperSlide} from 'swiper/react';
import style from './SwiperSlider.module.scss';
const SwiperSlider: FC = () => {
  return (
    <Slider slidesPerView={1}>
      <SwiperSlide>
        <div className={style.swiper_slide}>1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{backgroundColor: 'blue'}} className={style.swiper_slide}>
          2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{backgroundColor: 'green'}} className={style.swiper_slide}>
          3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{backgroundColor: 'white'}} className={style.swiper_slide}>
          4
        </div>
      </SwiperSlide>
    </Slider>
  );
};

export default SwiperSlider;
