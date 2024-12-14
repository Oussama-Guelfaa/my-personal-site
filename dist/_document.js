"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Document;
var _document = require("next/document");
// pages/_document.tsx

function Document() {
  return <_document.Html lang="fr">
      <_document.Head>
        {/* Lien vers Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </_document.Head>
      <body className="bg-background text-text-primary">
        <_document.Main />
        <_document.NextScript />
      </body>
    </_document.Html>;
}