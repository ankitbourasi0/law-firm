import React from "react";
import Image from "next/image";
const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black  bg-opacity-80 flex ">
      <div className=" ">
        <Image
          alt={author?.name}
          unoptimized
          height={100}
          width={100}
          className="align-middle  rounded-full "
          src={author?.photo?.url}
        />
      </div>
      <div className="text-left space-y-1 pl-4 self-center">
        <h3 className="text-white   text-xl font-bold">{author?.name}</h3>
        <p className="text-white text-lg">{author?.bio}</p>
      </div>
    </div>
  );
};

export default Author;