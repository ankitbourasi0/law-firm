import Image from "next/image";
import React from "react";

const Criminal = () => {
  return (
    <div className="bg-neutral-90 relative -top-20 w-full font-poppins ">
      <div className="w-full relative">
        <Image
          src="/images/mainBG5.jpg"
          alt="bg"
          className="object-cover w-full bg-opacity-60 max-h-[110vh]"
        />
        <div className="absolute top-56  w-full">
          <h1 className="text-6xl pl-12 text-white tracking-tight max-w-[1200px] mx-auto w-full ">
            Criminal Law <br />
            <p className="text-[55px] leading-none">
              As Canberra’s leading criminal lawyers,
              <br /> we’re confident yet nothing but
              <br /> professional. We maintain our judgment, fighting skillfully
              for the rights of our
              <br /> clients in every form of prosecution.
            </p>
          </h1>
        </div>
      </div>


      <div className="max-w-6xl w-full mx-auto">
        <div className="w-ful flex justify-center">
        <Image alt="logo" unoptimized src={"/images/logo.png"} width={280} height={280} />

        </div>

        <div className="w-full flex justify-center">
          <Image alt="criminalImage" unoptimized src={"/images/criminalImage.jpg"} width={800} height={200} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Criminal;
