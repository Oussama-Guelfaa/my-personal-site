"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// components/Button.tsx

function Button({
  href,
  children
}) {
  return <_link.default href={href} className="text-text.secondary bg-brand-dark rounded px-4 py-2 transition-colors">
      {children}
    </_link.default>;
}