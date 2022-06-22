import '../styles/globals.css';

import SideBar from '../components/SideBar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <SideBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
