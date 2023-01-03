import React, {FC, useState} from 'react';
import style from './Slider.module.scss';
import 'swiper/swiper.scss';
import {Swiper, SwiperProps} from 'swiper/react/swiper-react.js';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import {Navigation, Pagination} from 'swiper';

import NavigationButton from '../NavigationBtn/NavigationButton';

type SliderProps = {
  children: React.ReactNode | JSX.Element;
  title?: string;
} & SwiperProps;

const Slider: FC<SliderProps> = ({children, title, className, ...rest}) => {
  const [swiperSlide, setSwiperSlide] = useState(null);
  const onNext = () => {
    swiperSlide.slideNext();
  };
  const onPrev = () => {
    swiperSlide.slidePrev();
  };

  return (
    <div className={style.slider_container}>
      {title && <div className={style.slider_container_title}>{title}</div>}
      <Swiper
        {...rest}
        onSwiper={(e) => setSwiperSlide(e)}
        modules={[Navigation, Pagination]}>
        <NavigationButton type='prev' onClick={onPrev} />
        {children}
        <NavigationButton type='next' onClick={onNext} />
      </Swiper>
    </div>
  );
};

export default Slider;
