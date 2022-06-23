import '../styles/globals.css';

import SideBar from '../components/SideBar';
import MenuBar from '../components/MenuBar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <SideBar />
      <div className="main">
        <Component {...pageProps} />
      </div>
      <MenuBar />
    </div>
  );
}

export default MyApp;
