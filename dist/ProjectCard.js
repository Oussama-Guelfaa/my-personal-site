"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProjectCard;
var _image = _interopRequireDefault(require("next/image"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// components/ProjectCard.tsx

function ProjectCard({
  title,
  description,
  image,
  link
}) {
  return <a href={link} target="_blank" rel="noopener noreferrer" className="block border border-gray-300 rounded-md overflow-hidden hover:shadow-lg transition bg-background.dark">
      <_image.default src={image} alt={title} width={600} height={400} className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-text.primary">{title}</h3>
        <p className="text-sm text-text.primary mb-2">{description}</p>
        <span className="text-brand font-medium">Learn More →</span>
      </div>
    </a>;
}