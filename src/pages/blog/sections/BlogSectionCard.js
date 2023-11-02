import Link from "next/link";
import React from "react";

const BlogSectionCard = (post) => {
  console.log("jhel", post);
  {
    /* {  
            
            author: null,
          categories: [],
          coverImage: {url: 'https://media.graphassets.com/2spM7ZwhRHWQ6iMUp9kK'},
          createdAt: "2023-11-01T07:18:58.904912+00:00",
          id: "clofffn8q3pfb0apm45cgvvfv",
          slug: "test",
            title: "test"} */
  }

  return (
    <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100  shadow-2xl shadow-gray-600/10">
      <div class="relative overflow-hidden rounded-xl">
        <img
          src={post.post.coverImage.url}
          alt="art cover"
          loading="lazy"
          width="1000"
          height="667"
          class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div class="mt-6 relative">
        <Link class="inline-block" href={`/blog/${post.post.slug}`}>
          <h3 class="text-2xl font-semibold text-gray-800 dark:text-white line-clamp-3">
            {post.post.title}
          </h3>
        </Link>
        
        <p class="mt-2 mb-4 text-gray-600 dark:text-gray-300">
          Voluptates harum aliquam totam, doloribus eum impedit atque!
          Temporibus...
        </p>
        <Link class="inline-block" href={`/blog/${post.post.slug}`}>
          <button class="btn btn-neutral">Read more</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSectionCard;
