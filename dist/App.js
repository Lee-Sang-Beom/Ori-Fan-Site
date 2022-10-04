"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_reset_1 = require("styled-reset");
var Main_1 = require("./pages/Main");
var react_router_dom_1 = require("react-router-dom");
var Wisp_1 = require("./pages/Wisp");
var Forest_1 = require("./pages/Forest");
var Header_1 = require("./Component/Header");
function App() {
    var routes = [
        {
            path: "/",
            component: <Main_1.default />,
        },
        {
            path: "/ori_forest",
            component: <Forest_1.default />,
        },
        {
            path: "/ori_wisp",
            component: <Wisp_1.default />,
        },
    ];
    return (<React.Fragment>
      <styled_reset_1.Reset />
      <react_router_dom_1.BrowserRouter>
        <Header_1.default />
        <react_router_dom_1.Routes>
          {routes.map(function (item) { return (<react_router_dom_1.Route key={item.path} path={item.path} exact element={item.component}/>); })}
        </react_router_dom_1.Routes>
      </react_router_dom_1.BrowserRouter>
    </React.Fragment>);
}
exports.default = App;
