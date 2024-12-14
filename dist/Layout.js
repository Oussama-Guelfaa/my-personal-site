"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Layout;
var _Header = _interopRequireDefault(require("./Header"));
var _Footer = _interopRequireDefault(require("./Footer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// components/Layout.tsx

function Layout({
  children
}) {
  return <div className="flex flex-col min-h-screen bg-background">
      <_Header.default />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <_Footer.default />
    </div>;
}