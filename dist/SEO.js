"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SEO;
var _head = _interopRequireDefault(require("next/head"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// components/SEO.tsx

function SEO({
  title = "My Personal Website",
  description = "A personal website showcasing my work, blog, and contact info."
}) {
  return <_head.default>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/og-image.jpg" /> {/* Mettez à jour avec votre image OG */}
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/twitter-image.jpg" /> {/* Mettez à jour avec votre image Twitter */}
      
      <link rel="icon" href="/favicon.ico" />
    </_head.default>;
}