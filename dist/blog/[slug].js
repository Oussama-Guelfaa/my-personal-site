"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Post;
exports.getStaticPaths = getStaticPaths;
exports.getStaticProps = getStaticProps;
var _Layout = _interopRequireDefault(require("../../components/Layout"));
var _SEO = _interopRequireDefault(require("../../components/SEO"));
var _posts = require("../../lib/posts");
var _nextMdxRemote = require("next-mdx-remote");
var _image = _interopRequireDefault(require("next/image"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Post({
  frontMatter,
  mdxSource
}) {
  return <_Layout.default>
      <_SEO.default title={`${frontMatter.title} - My Personal Website`} description={frontMatter.title} />
      <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
      <div className="text-textColor-secondary mb-6">{frontMatter.date}</div>
      <article className="prose max-w-none">
        <_nextMdxRemote.MDXRemote {...mdxSource} components={{
        Image: _image.default
      }} />
      </article>
    </_Layout.default>;
}
async function getStaticPaths() {
  const posts = (0, _posts.getAllPosts)();
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const {
    frontMatter,
    mdxSource
  } = await (0, _posts.getPostBySlug)(params.slug);
  return {
    props: {
      frontMatter,
      mdxSource
    }
  };
}