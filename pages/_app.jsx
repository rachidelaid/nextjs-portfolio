import { useState } from 'react';
import '../styles/globals.css';

import SideBar from '../components/SideBar';
import MenuBar from '../components/MenuBar';

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="app">
      <SideBar />
      <div className={`main ${open ? 'expand' : ''}`}>
        <div className="top_wrap"></div>
        <Component {...pageProps} />
      </div>
      <MenuBar openMenu={openMenu} />
    </div>
  );
}

export default MyApp;
