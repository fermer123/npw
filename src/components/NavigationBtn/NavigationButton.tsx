import React, {FC} from 'react';
import style from './NavigationButton.module.scss';

type NavigationButtonProps = {
  icon?: React.ReactNode;
  type: 'next' | 'prev';
  onClick: () => void;
};
const NavigationButton: FC<NavigationButtonProps> = ({icon, type, onClick}) => {
  const controlStyles: React.CSSProperties =
    type === 'next' ? {right: '0'} : {left: '0'};

  return (
    <button
      aria-label='btn'
      type='button'
      className={style.button_slider}
      style={controlStyles}
      onClick={onClick}
    />
  );
};

export default NavigationButton;
