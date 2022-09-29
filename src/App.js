import react from "react";
import styles from "./css/main/Main.module.css";
import { Reset } from "styled-reset";
import React from "react";
import BackgroundVideo from "./Component/BackgroundVideo";
import Main from "./pages/Main";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Wisp from "./pages/Wisp";
import Forest from "./pages/Foreset";

function App() {
  const routes = [
    {
      path: "/",
      component: <Main />,
    },
    {
      path: "/ori_forest",
      component: <Forest />,
    },
    {
      path: "/ori_wisp",
      component: <Wisp />,
    },
  ];

  return (
    <React.Fragment>
      <Reset />
        <div className={styles.container}>
          <BackgroundVideo />
          <Main />
        </div>
    </React.Fragment>
  );
}

export default App;
