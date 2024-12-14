"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = About;
var _Layout = _interopRequireDefault(require("../components/Layout"));
var _SEO = _interopRequireDefault(require("../components/SEO"));
var _image = _interopRequireDefault(require("next/image"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function About() {
  return <_Layout.default>
      <_SEO.default title="About - My Personal Website" />
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <_image.default src="/images/profile.jpg" alt="Profile" width={300} height={300} className="rounded-full" />
        <div>
          <p className="text-lg text-textColor-secondary mb-4">
            Hello! I’m [Your Name], a [Your Profession] based in [Location]. I’m passionate about [skills/interests], and my work focuses on [core value proposition].
          </p>
          <p className="text-lg text-textColor-secondary">
            With experience in [technologies/fields], I create solutions that [unique selling point or professional goal].
          </p>
        </div>
      </div>
    </_Layout.default>;
}