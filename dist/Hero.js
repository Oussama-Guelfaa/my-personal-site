"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hero;
var _image = _interopRequireDefault(require("next/image"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// components/Hero.tsx

function Hero() {
  return <section className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-text.primary">
          Welcome to My Personal Space
        </h1>
        <p className="text-lg text-text.primary mb-6 max-w-md">
          I’m a [Your Profession] passionate about [Key Topics]. Explore my projects, read my thoughts, and connect with me.
        </p>
        <_Button.default href="/projects">View My Work</_Button.default>
      </div>
      <div className="flex-1 flex justify-center">
        <_image.default src="/images/profile.jpg" alt="Profile Picture" width={300} height={300} className="rounded-full" />
      </div>
    </section>;
}