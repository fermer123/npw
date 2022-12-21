import React, {FC} from 'react';
import style from './NavigationButton.module.scss';

type NavigationButtonProps = {
  icon?: React.ReactNode;
  type: 'next' | 'prev';
  onClick: () => void;
};
const NavigationButton: FC<NavigationButtonProps> = ({icon, type, onClick}) => {
  const controlStyles: React.CSSProperties = icon
    ? {
        zIndex: 50,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
      }
    : {
        zIndex: 50,
        position: 'absolute',
        height: '100%',
        opacity: '0.3',
        top: '0',
        backGroundColor: '#9CA3AF',
      } && type === 'next'
    ? {right: '0'}
    : {left: '0'};

  return (
    <button style={controlStyles} onClick={onClick}>
      {type === 'next' && icon ? icon : <></>}
      {type === 'prev' && icon ? icon : <></>}
    </button>
  );
};

export default NavigationButton;
