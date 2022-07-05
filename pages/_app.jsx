import { useState } from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

import SideBar from '../components/SideBar';
import MenuBar from '../components/MenuBar';

function MyApp({ Component, pageProps, router }) {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="app">
      <Head>
        <title>RACHID EL AID | Full-Stack Developer</title>
      </Head>
      <SideBar />
      <div className={`main ${open ? 'expand' : ''}`}>
        <AnimatePresence exitBeforeEnter>
          <div className="top_wrap"></div>
          <div className="nav_bar"></div>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
      <MenuBar openMenu={openMenu} />
    </div>
  );
}

export default MyApp;
