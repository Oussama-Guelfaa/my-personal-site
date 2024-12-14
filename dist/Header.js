"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;
var _Navbar = _interopRequireDefault(require("./Navbar"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// components/Header.tsx

function Header() {
  return <header className="py-4 bg-brand text-text.secondary shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyPersonalBrand</div>
        <_Navbar.default />
      </div>
    </header>;
}