import React, {FC} from 'react';
import Navbar from 'src/components/organizm/navbar/Navbar';
import style from './Layout.module.scss';
type LayoutProps = {
  children: React.ReactNode | JSX.Element;
};

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={style.layout_container}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
