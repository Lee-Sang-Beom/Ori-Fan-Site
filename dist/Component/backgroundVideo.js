"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_mp4_1 = require("../video/main.mp4");
var Main_module_css_1 = require("../css/main/Main.module.css");
function BackgroundVideo() {
    return (<>
      <video autoPlay loop muted className={Main_module_css_1.default.background}>
        <source src={main_mp4_1.default} type="video/mp4"/>
      </video>
    </>);
}
exports.default = BackgroundVideo;
