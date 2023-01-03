import React, {FC} from 'react';
import NAVIGATION_MENU_ITEMS from 'src/components/constants/Constants';
import MenuItem from '../menuItem/MenuItem';
import style from './MenuItems.module.scss';

NAVIGATION_MENU_ITEMS.map((e) => console.log(e));
const MenuItems: FC = () => {
  return (
    <div className={style.menuitems_container}>
      {NAVIGATION_MENU_ITEMS.map((menuItem, key) => (
        <MenuItem {...menuItem} key={key} />
      ))}
    </div>
  );
};

export default MenuItems;
