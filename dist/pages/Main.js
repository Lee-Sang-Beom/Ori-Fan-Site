"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Nav_1 = require("../Component/Nav");
var backgroundVideo_1 = require("../Component/backgroundVideo");
var Main_module_css_1 = require("../css/main/Main.module.css");
function Main() {
    return (<div className={Main_module_css_1.default.container}>
      <backgroundVideo_1.default />
      <Nav_1.default />
    </div>);
}
exports.default = Main;
