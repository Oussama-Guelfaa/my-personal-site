"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Projects;
var _Layout = _interopRequireDefault(require("../components/Layout"));
var _SEO = _interopRequireDefault(require("../components/SEO"));
var _ProjectCard = _interopRequireDefault(require("../components/ProjectCard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Projects() {
  return <_Layout.default>
      <_SEO.default title="Projects - My Personal Website" />
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Add your actual projects here */}
        <_ProjectCard.default title="Project One" description="A project about something amazing" image="/images/project1.jpg" link="https://example.com" />
        <_ProjectCard.default title="Project Two" description="Another incredible endeavor" image="/images/project1.jpg" link="https://example.com" />
        <_ProjectCard.default title="Project Three" description="A creative project that I loved working on" image="/images/project1.jpg" link="https://example.com" />
      </div>
    </_Layout.default>;
}