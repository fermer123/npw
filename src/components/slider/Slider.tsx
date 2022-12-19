import React, {FC, useState} from 'react';
import style from './Slider.module.scss';
import 'swiper/swiper.scss';
import {Swiper, SwiperProps} from 'swiper/react/swiper-react.js';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';
import {Navigation, Pagination} from 'swiper';

import NavigationButton from '../atoms/NavigationBtn/NavigationButton';
type SliderProps = {
  children: React.ReactNode | JSX.Element;
  title?: string;
  className?: string;
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
      <div className={className}>{title}</div>
      <Swiper
        {...rest}
        onSwiper={(e) => setSwiperSlide(e)}
        modules={[Navigation, Pagination]}>
        <NavigationButton type='prev' onClick={onPrev} />
        {children}
      </Swiper>
      <NavigationButton type='next' onClick={onNext} />;
    </div>
  );
};

export default Slider;
