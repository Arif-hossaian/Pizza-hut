import React from 'react';
import Footer from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

const WebLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default WebLayout;
