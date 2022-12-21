import React, {FC} from 'react';
import MenuItems from '../menuItems/MenuItems';
import style from './Navbar.module.scss';

const Navbar: FC = () => {
  return (
    <div className={style.navbar_container}>
      <div className={style.navbar_container_logo}>Logo</div>
      <MenuItems />
      <div className={style.navbar_container_btn_group}>
        <button className={style.navbar_container_btn_group_sign_in}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
