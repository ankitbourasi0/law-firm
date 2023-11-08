import moment from "moment";
import Image from "next/image";
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

    <div>

<article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg ">
  <img
       src={post.post?.coverImage?.url}
             alt="art cover"
             loading="lazy"
             width={1000}
             height={667}
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
    <time  className="block text-xs font-semibold text-gray-500">
    {moment(post.post.createdAt).format("MMM DD, YYYY")}
    </time>

    <Link href={`/blog/${post.post?.slug}`}>
      <h3 className="mt-0.5 text-lg font-semibold text-gray-900 line-clamp-2">
      {post.post?.title}
      </h3>
    </Link>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
      Molestias explicabo corporis voluptatem?
    </p>
  </div>
</article>
    </div>
    // <div className="group p-6 sm:p-8 rounded-3xl bg-yellow-100 border border-gray-100  shadow-2xl shadow-gray-600/10">
    //   <div className="relative overflow-hidden rounded-xl">
    //     <Image
    //    
    //       className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
    //     />
    //   </div>
    //   <div className="mt-6 relative">
    //     <Link className="inline-block" href={`/blog/${post.post?.slug}`}>
    //       <h3 className="text-2xl font-semibold text-gray-800 dark:text-white line-clamp-3">
    //         {post.post?.title}
    //       </h3>
    //     </Link>
        
    //     <p className="mt-2 mb-4 text-gray-600 dark:text-gray-300">
    //       Voluptates harum aliquam totam, doloribus eum impedit atque!
    //       Temporibus...
    //     </p>
    //     <Link className="inline-block" href={`/blog/${post.post?.slug}`}>
    //       <button className="btn btn-neutral">Read more</button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default BlogSectionCard;
