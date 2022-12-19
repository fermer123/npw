import React, {FC} from 'react';
import style from './NavigationButton.module.scss';

type NavigationButtonProps = {
  icon?: React.ReactNode;
  type: 'next' | 'prev';
  onClick: () => void;
};
const NavigationButton: FC<NavigationButtonProps> = ({icon, type, onClick}) => {
  return (
    <button className={style.NavigationButton_container} onClick={onClick}>
      {type === 'next' && icon ? icon : <></>}
      {type === 'prev' && icon ? icon : <></>}
    </button>
  );
};

export default NavigationButton;
