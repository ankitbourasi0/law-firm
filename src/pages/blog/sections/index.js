import React from "react";
import BlogSectionCard from "./BlogSectionCard";
import { getAllPost } from "@/pages/api";

export async function getStaticProps() {
  const result = await getAllPost();

  return {
    props: { posts: result.posts },
  };
}

const BlogSection = ({ posts }) => {
  return (
    <div className="bg-yellow-100">
      <div class="py-12">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              Sharing is Caring
            </h2>
            <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
              Insights, updates, and expert perspectives: Explore our blog for
              the latest in law. Stay informed, get practical advice, and gain
              valuable insights into the legal world.
            </p>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-16">
            {posts && posts.map((post) => <BlogSectionCard post={post} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
