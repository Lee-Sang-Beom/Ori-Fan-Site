"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main_module_css_1 = require("../css/main/Main.module.css");
var forest_logo_png_1 = require("../img/forest_logo.png");
var wisp_logo_png_1 = require("../img/wisp_logo.png");
var react_router_dom_1 = require("react-router-dom");
function Nav() {
    return (<>
      <div className={Main_module_css_1.default.nav__wrap}>
        <div className={Main_module_css_1.default.nav}>
          <div className={Main_module_css_1.default.nav__left_forest}>
            <react_router_dom_1.Link to="/ori_forest">
              <img src={forest_logo_png_1.default}/>
            </react_router_dom_1.Link>
          </div>
          <div className={Main_module_css_1.default.nav__right_wisp}>
            <react_router_dom_1.Link to="/ori_wisp">
              <img src={wisp_logo_png_1.default}/>
            </react_router_dom_1.Link>
          </div>
        </div>
      </div>
    </>);
}
exports.default = Nav;
