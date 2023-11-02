import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "@/pages/api";
import Image from "next/image";
const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-yellow-200 text-neutral-800    border border-transparent border-neutral-900 rounded-lg p-6 mb-6">
      <h3 className="text-xl mb-8 font-semibold border-b border-neutral-950 pb-4">
        {slug ? "Related posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex    rounded-lg p-1  justify-center transition duration-300  items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              height={60}
              width={60}
              className="align-middle rounded-full"
              src={post.coverImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-600 dark:text-white font-xs">
              {moment(post.createdAt).format("MMM DD,  YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;