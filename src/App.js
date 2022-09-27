import react from 'react';
import styles from './css/main/Main.module.css';
import {Reset} from 'styled-reset';
import React from 'react';
import BackgroundVideo from './Component/BackgroundVideo';
import Header from './Component/Header';
import Nav from './Component/Nav';

function App() {
  return (
    <React.Fragment>
      <Reset/>
      <div className={styles.container}>
        <BackgroundVideo/>
        <Header />
        <Nav />
      </div>
    </React.Fragment>
  );
}

export default App;
