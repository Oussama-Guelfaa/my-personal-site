"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;
exports.getStaticProps = getStaticProps;
var _Layout = _interopRequireDefault(require("../components/Layout"));
var _SEO = _interopRequireDefault(require("../components/SEO"));
var _Hero = _interopRequireDefault(require("../components/Hero"));
var _link = _interopRequireDefault(require("next/link"));
var _ProjectCard = _interopRequireDefault(require("../components/ProjectCard"));
var _BlogCard = _interopRequireDefault(require("../components/BlogCard"));
var _posts = require("../lib/posts");
var _utils = require("../lib/utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// pages/index.tsx

function Home({
  posts
}) {
  return <_Layout.default>
      <_SEO.default title="Home - My Personal Website" />
      <_Hero.default />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-text.primary">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <_ProjectCard.default title="Project One" description="A project about something amazing" image="/images/project1.jpg" link="https://example.com" />
          <_ProjectCard.default title="Project Two" description="Another incredible endeavor" image="/images/project2.jpg" link="https://example.com" />
          <_ProjectCard.default title="Project Three" description="A creative project that I loved working on" image="/images/project3.jpg" link="https://example.com" />
        </div>
        <div className="mt-4">
          <_link.default href="/projects" className="text-brand transition-colors">
            See all projects →
          </_link.default>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-text.primary">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map(post => <_BlogCard.default key={post.slug} slug={post.slug} title={post.title} excerpt={post.excerpt} date={(0, _utils.formatDate)(post.date)} />)}
        </div>
        <div className="mt-4">
          <_link.default href="/blog" className="text-brand transition-colors">
            Read all posts →
          </_link.default>
        </div>
      </section>
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