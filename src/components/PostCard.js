import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => (
  <div className="group p-6 sm:p-8 rounded-3xl bg-yellow-200 border border-gray-100  shadow-2xl shadow-gray-600/10">
    <div className="relative overflow-hidden rounded-xl">
      <Image
        src={post.coverImage.url}
        alt="art cover"
        loading="lazy"
        width={1000}
        height={667}
        className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="mt-6 relative">
      <Link className="inline-block" href={`/blog/${post.slug}`}>
        <h3 className="md:text-2xl font-semibold text-gray-800 dark:text-white line-clamp-2">
          {post.title}
        </h3>
      </Link>
      <div className="mt-2 flex">
        <div className="avatar ">
          <div className="w-10 rounded-full">
            <Image src="/images/attorneys/dummy1.jpg"  alt="author"     width={50}
      height={50}/>
          </div>
        </div>
        <div className="text-gray-600 flex items-center md:text-base text-sm   justify-between w-full">
          <p className="pl-2 font-semibold ">Ankit Bourasi</p>
          <p className="  font-semibold">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>

      {/* <Link className="inline-block" href={`/blog/${post.slug}`}>
          <button className="btn btn-">Read more</button>
        </Link> */}
    </div>
  </div>
);

export default PostCard;
