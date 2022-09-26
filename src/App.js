import react from 'react';
import styles from './css/main/Main.module.css';
import {Reset} from 'styled-reset';
import React from 'react';
import BackgroundVideo from './Component/backgroundVideo';
import Header from './Component/Header';

function App() {
  return (
    <React.Fragment>
      <Reset/>
      <div className={styles.container}>
        <BackgroundVideo/>
        <Header />
      </div>
    </React.Fragment>
  );
}

export default App;
