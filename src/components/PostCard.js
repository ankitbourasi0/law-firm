import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "@/utils/useCustomScreenSize";
import {FiArrowUpRight} from"react-icons/fi"
const PostCard = ({ post }) => {
  const size = useMediaQuery(768);

return (
  <div>
    {size ? (
      <div className="group p-4 sm:p-8 rounded-3xl bg-orange-300/40 border my-2 border-gray-100  shadow-2xl shadow-gray-600/10">
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
            <h3 className="md:text-2xl font-semibold  line-clamp-2">
              {post.title}
            </h3>
          </Link>
          <div className="mt-2 flex">
            <div className="avatar ">
              <div className="w-10 rounded-full">
                <Image
                  src="/images/attorneys/dummy1.jpg"
                  alt="author"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="flex items-center md:text-base text-sm   justify-between w-full">
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
    ) : (
      <div className="flex space-x-10 items-center border-t  border-neutral-700 px-4 py-8 max-h-[200px]">
        <div className="max-w-[200px] overflow-hidden">
          <Image
            src={post.coverImage.url}
            alt="art cover"
            loading="lazy"
            width={1000}
            height={667}
            className="rounded-lg w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-1">
          <p className="  font-semibold">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>

          <Link className="inline-block" href={`/blog/${post.slug}`}>
            <h3 className="md:text-xl font-semibold text-gray-800 dark:text-white ">
              {post.title}
            </h3>
          </Link>
        </div>

        <div className="font-semibold text-xl text-red-500">
          <Link href={`/blog/${post.slug}`} className="flex items-center"><p>Read </p><span><FiArrowUpRight size={24} color="red"  /> </span></Link>
        </div>
      </div>
    )}
  </div>
);
    }

export default PostCard;
