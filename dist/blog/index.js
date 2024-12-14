"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BlogIndex;
exports.getStaticProps = getStaticProps;
var _Layout = _interopRequireDefault(require("../../components/Layout"));
var _SEO = _interopRequireDefault(require("../../components/SEO"));
var _BlogCard = _interopRequireDefault(require("../../components/BlogCard"));
var _posts = require("../../lib/posts");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function BlogIndex({
  posts
}) {
  return <_Layout.default>
      <_SEO.default title="Blog - My Personal Website" />
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map(post => <_BlogCard.default key={post.slug} slug={post.slug} title={post.title} excerpt={post.excerpt} date={post.date} />)}
      </div>
    </_Layout.default>;
}
async function getStaticProps() {
  const posts = (0, _posts.getAllPosts)().map(post => ({
    slug: post.slug,
    title: post.data.title,
    excerpt: post.data.excerpt,
    date: post.data.date
  }));
  return {
    props: {
      posts
    }
  };
}