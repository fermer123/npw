import React, {FC} from 'react';
import style from './MenuItem.module.scss';

type MenuItemProps = {
  label: string;
};
const MenuItem: FC<MenuItemProps> = ({label}) => {
  return <div className={style.menuUtem_container}>{label}</div>;
};

export default MenuItem;
