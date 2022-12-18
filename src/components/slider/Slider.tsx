import React, {FC} from 'react';
import {Swiper, SwiperProps} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.scss';
import 'swiper/swiper-bundle.scss';
import style from './Slider.module.scss';
type SliderProps = {
  children: React.ReactNode | JSX.Element;
  title?: string;
  className?: string;
} & SwiperProps;

const Slider: FC<SliderProps> = ({children, title, className, ...rest}) => {
  return (
    <div className={style.slider_container}>
      <div></div>
      <Swiper {...rest}>slider</Swiper>;
    </div>
  );
};

export default Slider;
