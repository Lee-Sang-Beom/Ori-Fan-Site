import react from 'react';
import styles from './css/main/Main.module.css';
import {Reset} from 'styled-reset';
import React from 'react';
import BackgroundVideo from './Component/backgroundVideo';

function App() {
  return (
    <React.Fragment>
      <Reset/>
      <div className={styles.container}>
        <BackgroundVideo/>
      </div>
    </React.Fragment>
    
  );
}

export default App;
