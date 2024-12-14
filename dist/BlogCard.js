"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogCard;
var _link = _interopRequireDefault(require("next/link"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// components/BlogCard.tsx

function BlogCard({
  slug,
  title,
  excerpt,
  date
}) {
  return <_link.default href={`/blog/${slug}`} className="block border border-gray-300 rounded-md p-4 hover:shadow-lg transition bg-background.dark">
      <h3 className="text-xl font-semibold mb-2 text-text.primary">{title}</h3>
      <p className="text-sm text-text.primary mb-2">{excerpt}</p>
      <div className="text-xs text-text.primary">{date}</div>
    </_link.default>;
}