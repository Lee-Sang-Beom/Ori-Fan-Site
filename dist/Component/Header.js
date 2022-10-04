"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var Main_module_css_1 = require("../css/main/Main.module.css");
var Ori_logo_png_1 = require("../img/Ori-logo.png");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var react_router_dom_1 = require("react-router-dom");
function Header() {
    return (<>
      <div className={Main_module_css_1.default.header}>
        <div className={Main_module_css_1.default.header__mainlogo}>
          {/* Link to 사용 : 내부 페이지 */}
          <react_router_dom_1.Link to="/">
            <img src={Ori_logo_png_1.default}/>
          </react_router_dom_1.Link>
        </div>
        <div className={Main_module_css_1.default.header__github}>
          {/* a태그 사용 : 외부 페이지 */}
          <a href="https://github.com/Lee-Sang-Beom/Ori-Fan-Site">
            <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faGithub} style={{ color: "white" }}/>
          </a>
        </div>
      </div>
    </>);
}
exports.default = Header;
