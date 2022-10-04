import { Reset } from "styled-reset";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wisp from "./pages/Wisp";
import Forest from "./pages/Forest";
import Header from "./Component/Header";
import React from "react";

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
              element={item.component}
            />
          ))}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
