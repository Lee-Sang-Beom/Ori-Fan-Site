import react from "react";
import { Reset } from "styled-reset";
import React from "react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Wisp from "./pages/Wisp";
import Forest from "./pages/Forest";
import Header from "./Component/Header";
import ScrollOut from "scroll-out";

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

      <Router>
        <Header />
        <Routes>
          {routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              exact
              element={item.component}
            />
          ))}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
