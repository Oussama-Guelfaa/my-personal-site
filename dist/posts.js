"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllPosts = getAllPosts;
exports.getPostBySlug = getPostBySlug;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _grayMatter = _interopRequireDefault(require("gray-matter"));
var _serialize = require("next-mdx-remote/serialize");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const postsDirectory = _path.default.join(process.cwd(), 'posts');
function getAllPosts() {
  const fileNames = _fs.default.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = _path.default.join(postsDirectory, fileName);
    const fileContents = _fs.default.readFileSync(fullPath, 'utf8');
    const {
      data,
      content
    } = (0, _grayMatter.default)(fileContents);
    return {
      slug,
      data,
      content
    };
  }).sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}
async function getPostBySlug(slug) {
  const fullPath = _path.default.join(postsDirectory, `${slug}.md`);
  const fileContents = _fs.default.readFileSync(fullPath, 'utf8');
  const {
    data,
    content
  } = (0, _grayMatter.default)(fileContents);
  const mdxSource = await (0, _serialize.serialize)(content);
  return {
    frontMatter: data,
    mdxSource
  };
}