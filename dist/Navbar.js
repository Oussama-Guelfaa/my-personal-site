"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// components/Navbar.tsx

function Navbar() {
  return <nav>
      <ul className="flex gap-6 text-text.secondary font-medium">
        <li><_link.default href="/">Home</_link.default></li>
        <li><_link.default href="/about">About</_link.default></li>
        <li><_link.default href="/projects">Projects</_link.default></li>
        <li><_link.default href="/blog">Blog</_link.default></li>
        <li><_link.default href="/contact">Contact</_link.default></li>
      </ul>
    </nav>;
}