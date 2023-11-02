import Head from "next/head";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";

import Solutions from "@/components/HasselFreeSolution";
import useMediaQuery from "@/utils/useCustomScreenSize";
import MobileFooter from "@/components/Footer";
import Counter from "@/utils/Counter";
import PostCard from "@/components/PostCard";
import { getAllPost } from "./api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogSectionCard from "./blog/sections/BlogSectionCard";
import AuthorProfile from "@/components/AuthorProfile";
export async function getStaticProps() {
  const result = (await getAllPost()) || [];

  return {
    props: { result },
  };
}
const Home = ({ result }) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [postData, setPostData] = useState(false);

  const Profiles = Array.from({ length: 4 }, (_, index) => {
    return <AuthorProfile />;
  });

  useEffect(() => {
    setPostData(result);
    setDataLoaded(true);
  }, [result]);

  const isBreakPoint = useMediaQuery(768);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-yellow-500 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6  text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-yellow-500 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6  text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );

  return (
    <div className="w-full bg-[#1E1E1E]">
      {/* <div className="w-full  font-poppins h-full min-h-[80vh]  ">
        <div className="w-full    h-full   ">
          <div className={"w-full md:max-w-6xl  mx-auto  h-full  "}>
            <div className="grid grid-cols-2  w-full max-h-[80vh] ">

              <div className=" flex h-full  max-w-screen-sm  flex-col justify-center ">

                <h1 className="md:text-5xl text-3xl mb-12  ">
                  हिरवा एसोसिएट्स .
                  <br />{" "}
                  <span className="">
                    The Art of{" "}
                    <span
                      className="cursor-pointer"
                      onMouseEnter={() => setonHover(true)}
                      onMouseLeave={() => setonHover(false)}
                    >
                      Law.
                    </span>
                  </span>
                </h1>
              
                <div className=" md:text-2xl text-xl max-w-sm font-medium ">
                  <h1 className=" mb-4 ">
                    Our team of lawyers work to ensure that the law serves our
                    clients in these areas:
                  </h1>

                  <button className="text-neutral-500 hover:text-neutral-800 font-normal mb-3 flex items-center  ">
                    <p>Criminal Law </p>
                  </button>

                  <button className="text-neutral-500 hover:text-neutral-800 font-normal mb-3 flex items-center  ">
                    <p>Civil Law </p>
                  </button>
                </div>
              </div>

              <div className="relative ml-auto ">
                <Image src={"/images/Shape.png"} width={420} height={420} />
                <div className="absolute -top-14">
                  <Image src={"/images/image.png"} width={440} height={480} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}
      <div className="md:min-h-[90vh] w-full py-16 px-8">
        <div className="max-w-7xl w-full mx-auto md:flex grid grid-flow-row gap-6 justify-between">
          <div>
            {" "}
            <m.p
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="uppercase p-2 font-medium bg-zinc-400 text-white bg-opacity-30 md:text-base text-xs max-w-[10rem] md:max-w-[13rem] mb-2"
            >
              #1 LAW FIRM IN INDORE
            </m.p>
            <m.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="flex text-yellow-50 md:text-7xl text-4xl font-bold space-x-4"
            >
              <h1 className="">Expert</h1>
              <img
                src="./images/icons/hammerlaw.png"
                className="md:w-16 w-12"
              />

              <h1>Legal</h1>
            </m.div>
            <m.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="text-yellow-50 md:text-7xl text-4xl font-bold"
            >
              Counsel For Your Needs
            </m.h1>
            <p className="text-gray-300 my-10 md:text-lg text-base max-w-xl tracking-wide">
              Welcome to Hirwa Associates, your trusted partner in legal
              matters. With a team of seasoned attorneys, we offer comprehensive
              legal services to clients accross India and beyond.
            </p>
            <m.button
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="btn bg-[#ebd234] btn-lg btn-wide hover:bg-yellow-400 md:px-12  font-semibold  md:text-xl  uppercase  shadow-gray-200"
            >
              Consult Now
            </m.button>
          </div>
          <div className=" flex justify-center items-center ">
            <img
              src="./images/books.png"
              className="object-cover w-full max-w-[680px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1E1E1E]  ">
        {/* Why Choose US ?  */}
        {/* <div className="w-full mb-16 ">
          <p className="text-[48px] md:mb-20 text-center w-full">
            Why Choose us?
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-5  md:grid-cols-3">
            <div className="max-w-sm min-h-[320px] w-full rounded-xl   border dark:border-[#2D2D2D] p-6">

              <h4 className="font-semibold text-2xl mb-6">98% Success Rate</h4>
              <p className="text-sm text-[#797676]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </p>
            </div>

            <div className="max-w-sm min-h-[320px] w-full rounded-xl  border dark:border-[#2D2D2D] p-6">

              <h4 className="font-semibold text-2xl mb-6">98% Success Rate</h4>
              <p className="text-sm text-[#797676]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </p>
            </div>

            <div className="max-w-sm min-h-[320px] w-full rounded-xl  border dark:border-[#1D1D1D] p-6">

              <h4 className="font-semibold text-2xl mb-6">100% Success Rate</h4>
              <p className="text-sm text-[#797676]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </p>
            </div>
          </div>
        </div> */}

        {/* About us  */}
        <div className="w-full  bg-yellow-50 text-black min-h-[80vh] px-8 py-10">
          <div className="w-full  max-w-7xl min-h-[80vh] mx-auto grid items-center md:grid-cols-2">
            <div className="min-h-full py-16">
              <h2 className=" text-2xl md:text-left text-center ">
                ● About Us
              </h2>
            </div>
            <div>
              <p className="md:text-4xl text-2xl text-right  ">
                {" "}
                At Hirwa Law Firm, we are dedicated to providing top-notch legal
                representation and guidance tailored to your individual needs.
                With over 25 years of combined experience, our team of highly
                skilled attorneys specializes in a diverse divers range of legal
                areas, ensuring that no matter your issue, we've got your
                covered.{" "}
              </p>
              <div className="w-full flex py-6 items-center justify-between ">
                <div className="border-l-2 border-gray-400 md:pl-4 pl-2 space-y-3">
                  <Counter from={0} to={1000} duration={3} />
                  <p className="text-sm  md:font-normal font-semibold text-neutral-700   pl-1">
                    We have faced law cases
                  </p>
                </div>
                <div className="border-l-2 border-gray-400 pl-4  space-y-3">
                  <p className="font-bold  text-4xl md:text-5xl">25+</p>
                  <p className="text-sm  md:font-normal font-semibold text-neutral-700  ">
                    Years of experience
                  </p>
                </div>
                <div className="border-l-2 border-gray-400 pl-4  space-y-3">
                  <p className="font-bold  text-4xl md:text-5xl">95%</p>
                  <p className="text-sm  md:font-normal font-semibold text-neutral-700  ">
                    Case win record
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Solutions/> */}
        {/* Area of Practice  */}

        <div className="w-full min-h-[100vh] my-16 px-4">
          <p className="md:text-[52px] text-3xl text-yellow-100 md:mb-6 mb-10 font-semibold text-center ">
            Our Practice Area
          </p>
          <div className="max-w-[74rem]  text-white w-full mx-auto grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-0  ">
            <m.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.1,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className="group rounded-lg text-center max-w-[340px]  hover:bg-slate-500 py-5 md:py-10 px-3 md:px-4 hover:bg-opacity-25"
            >
              {/*logo image  */}
              <div className="w-full flex justify-center">
                <div className=" rounded-full  bg-slate-800 p-5">
                  <img
                    src="./images/icons/family2.png"
                    className="md:w-14  md:h-14 w-10 h-10  "
                  />
                </div>
              </div>
              <h3 className="text-[16px] md:text-2xl text-amber-100 font-bold my-4">
                Family Law
              </h3>
              <p className="text-[12px] md:text-[16px]">
                Navigating the complexities of divorce, child custody, and
                spousal support.
              </p>
            </m.div>

            <m.div
              initial={{ y: -30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.3,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className="rounded-lg text-center max-w-[340px] hover:bg-slate-500 py-5 md:py-10 px-3 md:px-4 hover:bg-opacity-25"
            >
              {/*logo image  */}
              <div className="w-full flex justify-center">
                <div className=" rounded-full bg-slate-800 p-5">
                  <img
                    src="./images/icons/personal.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                  />
                </div>
              </div>
              <h3 className="text-[16px] md:text-2xl text-amber-100 font-bold my-4">
                Personal Injury
              </h3>
              <p className="text-[12px] md:text-[16px]">
                Securing compensation for injuries resulting from someone else's
                negligence.
              </p>
            </m.div>

            <m.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.15,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className="rounded-lg text-center max-w-[340px] hover:bg-slate-500 py-5 md:py-10 px-3 md:px-4 hover:bg-opacity-25"
            >
              {/*logo image  */}
              <div className="w-full flex justify-center">
                <div className=" rounded-full bg-slate-800 p-5">
                  <img
                    src="./images/icons/criminal.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                  />
                </div>
              </div>
              <h3 className="text-[16px] md:text-2xl text-amber-100 font-bold my-4">
                Criminal Defence
              </h3>
              <p className="text-[12px] md:text-[16px]">
                Vigorously defending your rights in the face of criminal
                charges.
              </p>
            </m.div>

            <m.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.1,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className="rounded-lg text-center max-w-[340px] hover:bg-slate-500 py-5 md:py-10 px-3 md:px-4 hover:bg-opacity-25"
            >
              {/*logo image  */}
              <div className="w-full flex justify-center">
                <div className=" rounded-full bg-slate-800 p-5">
                  <img
                    src="./images/icons/business.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                  />
                </div>
              </div>
              <h3 className="text-[16px] md:text-2xl text-amber-100 font-bold my-4">
                Business Law
              </h3>
              <p className="text-[12px] md:text-[16px]">
                Assiting businesses, from startup to established companies, in
                all legal matters,
              </p>
            </m.div>

            <m.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.25,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className="rounded-lg text-center max-w-[340px] hover:bg-slate-500 py-5 md:py-10 px-3 md:px-4 hover:bg-opacity-25"
            >
              {/*logo image  */}
              <div className="w-full flex justify-center">
                <div className=" rounded-full bg-slate-800 p-5">
                  <img
                    src="./images/icons/planning.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                  />
                </div>
              </div>
              <h3 className="text-[16px] md:text-2xl text-amber-100 font-bold my-4">
                Estate Planning
              </h3>
              <p className="text-[12px] md:text-[16px]">
                Protecting your legacy and ensuring your loved ones are taken
                care of
              </p>
            </m.div>

            <m.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.15,
                  ease: "linear",
                },
              }}
              viewport={{ once: true }}
              className="rounded-lg text-center max-w-[340px] hover:bg-slate-500 py-5 md:py-10 px-3 md:px-4 hover:bg-opacity-25"
            >
              {/*logo image  */}
              <div className="w-full flex justify-center">
                <div className=" rounded-full bg-slate-800 p-5">
                  <img
                    src="./images/icons/realestate.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                  />
                </div>
              </div>
              <h3 className="text-[16px] md:text-2xl text-amber-100 font-bold my-4">
                Real Estate Law
              </h3>
              <p className="text-[12px] md:text-[16px]">
                Residential and commercial property transactions &
                Landlord-tenant disputes.
              </p>
            </m.div>
          </div>
        </div>

        {/* why choose us  */}
        <div className="w-full md:flex items-center  bg-yellow-50 min-h-screen">
          <div className="hidden md:block  w-full max-w-4xl relative">
            <img src="./images/97.jpg " className="w-[650px] h-[580px]" />
            <img
              src="./images/gallary/4.png"
              className="w-[620px] h-[480px] absolute left-24 top-[50px] rounded-lg"
            />
          </div>
          <div className="w-full text-black md:pl-10 px-4 md:pt-0  pt-16 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Why Choose
              <br />
              Our Law Firm?
            </h1>
            <ul className=" md:text-lg list-disc w-full md:max-w-xl md:ml-6 px-4 space-y-2  ">
              <li>
                <span className="font-bold">Experience:</span> Over 20 years of
                successful case outcomes.
              </li>
              <li>
                <span className="font-bold">Personalized Service:</span> Every
                client is unique; we treat you as such.
              </li>
              <li>
                <span className="font-bold">Transparent Pricing:</span> No
                hidden fees or unexpected bills
              </li>
              <li>
                <span className="font-bold">Award-Winning Team:</span> Our
                attorneys have been recognized by legal bodies both locally and
                nationally
              </li>
            </ul>
            <button className="uppercase md:text-lg text-white bg-black px-16 py-3 md:rounded-none rounded-lg md:px-12 md:py-3 md:ml-6 mt-6 font-semibold ">
              Consult{" "}
            </button>
          </div>
          <div className="md:hidden block  w-full  ">
            <img src="./images/criminalImage.jpg" className=" w-full  " />
          </div>
        </div>

        {/* Meet with your lawyers */}
        <div className="min-h-[100vh] md:relative mb-10">
          {/* <div className="md:block hidden ">
            <img src="./images/grid.jpg" className="w-full md:object-cover  " />
          </div> */}

          {/* <div className=" w-full md:max-w-7xl min-h-screen  md:absolute top-10 left-32">
            <div className="text-center py-8">
              <h1 className="text-4xl md:text-6xl text-yellow-100 font-semibold">
                Meet With <br />
                Your Lawyers
              </h1>
            </div>
            <div className="w-full mt-2">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5  w-full md:max-w-[68rem] mx-auto ">
                <div className="md:max-w-[320px]  md:rounded-none mx-auto bg-yellow-50 min-h-[360px] md:min-h-[420px] relative">
                  <img
                    src="./images/attorneys/dummy1.jpg"
                    className="object-cover md:h-80 h-72"
                  />
                  <div className="absolute text-black text-center px-12 w-full md:py-4 py-3  bg-white">
                    <h2 className="font-bold text-lg">Aryan Danal</h2>
                    <p className="md:text-base text-sm">Junior Attorney</p>{" "}
                  </div>
                </div>
                <div className="max-w-[320px]  md:rounded-none mx-auto bg-yellow-50 min-h-[360px] md:min-h-[420px] relative">
                  <img
                    src="./images/attorneys/dummy1.jpg"
                    className="object-cover md:h-80 h-72"
                  />
                  <div className="absolute text-black text-center px-12 w-full md:py-4 py-3  bg-white">
                    <h2 className="font-bold text-lg">Ankit Bourasi</h2>
                    <p className="md:text-base text-sm">Senior Attorney</p>{" "}
                  </div>
                </div>
                <div className="max-w-[320px]  md:rounded-none mx-auto bg-yellow-50 min-h-[360px] md:min-h-[420px] relative">
                  <img
                    src="./images/attorneys/dummy1.jpg"
                    className="object-cover md:h-80 h-72"
                  />
                  <div className="absolute text-black text-center px-12 w-full md:py-4 py-3  bg-white">
                    <h2 className="font-bold text-lg">Aryan Danal</h2>
                    <p className="md:text-base text-sm">Junior Attorney</p>{" "}
                  </div>
                </div>
              </div>
           
              <div className="w-full flex justify-center mt-10">
                <button className="bg-[#ebd234] md:rounded-none rounded-lg text-neutral-800 font-bold md:text-xl px-14 py-4">
                  View All Attorney
                </button>
              </div>
            </div>
          </div> */}

          <div class="py-20 text-white">
            <div class="xl:container mx-auto px-6 md:px-12">
              <div class="mb-16 md:w-2/3 lg:w-1/2">
                <h2 class="mb-4 text-2xl font-bold   md:text-4xl">
                  Tailus blocks leadership
                </h2>
                <p class=" dark:text-gray-300">
                  Tailus prides itself not only on award-winning technology, but
                  also on the talent of its people of some of the brightest
                  minds and most experienced executives in business.
                </p>
              </div>
              <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Profiles}
              </div>
            </div>
          </div>
        </div>

        {/* //Blog Post  */}

        <div className="w-full bg-yellow-50 md:py-16 pt-12 pb-16 md:px-10 text-neutral-800 ">
          <div className=" md:mb-16 mb-6 ">
            <h1 className="md:text-5xl  md:mb-8 mb-3  font-semibold text-center text-3xl  md:capitalize uppercase ">
              Blogs
            </h1>
            <p class=" text-center lg:mx-auto lg:w-6/12 text-gray-700 text-lg dark:text-gray-300">
              Insights, updates, and expert perspectives: Explore our blog for
              the latest in law. Stay informed, get practical advice, and gain
              valuable insights into the legal world.
            </p>
          </div>
          <div className="  md:px-16 grid grid-cols-3 gap-x-10">
            {postData.posts &&
              postData.posts.slice(-3).map((post) => (
                <PostCard post={post} key={post.id} />
                // <BlogSectionCard post={post} />
              ))}
          </div>

          <div className="flex my-8 justify-center items-center">
            <Link href={"/blog/sections"}>
              <button className="btn btn-neutral">Read more</button>
            </Link>
          </div>
        </div>

        <div className="w-full min-h-[430px] md:relative px-6">
          {/* <img
            src="./images/grid.jpg"
            className="w-full object-cover overflow-hidden md:block hidden max-h-[420px] "
          /> */}
          <div className="w-full md:absolute md:mt-0 mt-20 top-32 ">
            <div className="grid md:grid-cols-2 w-full mx-auto max-w-7xl">
              <div>
                <h2 className="text-2xl md:text-5xl text-yellow-100  font-semibold">
                  Are You in Trouble with any
                  <br />
                  Cases? Contact us!
                </h2>
                <br />
                <p className="text-gray-300">
                  Welcome to hirwa associates, your trusted partner in legal
                  matters. With a team of
                  <br />
                  seasoned attorneys, we offer comprehensive legal servicesto
                  clients
                  <br />
                  accross India and beyond.
                </p>
              </div>

              <div className="w-full flex justify-center items-center mt-6">
                <button className="bg-[#ebd234] text-black font-bold md:text-xl md:px-14 md:py-4 px-16 py-3 md:w-fit w-full rounded-lg md:rounded-none ">
                  Consult Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
      {isBreakPoint ? (
        <MobileFooter />
      ) : (
        <div className="bg-yellow-50 w-full min-h-[420px] flex flex-col justify-center text-black">
          <div className="w-full max-w-7xl mx-auto flex my-10 justify-between ">
            {/* Logo name description */}
            <div className="">
              <h2 className="font-semibold text-4xl">Hirwa Associates</h2>
              <br />
              <p>
                Welcome to Hirwa Associates, your trusted
                <br />
                partner in legal matters. We are
                <br /> providing the best
              </p>
            </div>

            {/* Quick links      */}
            <div className="">
              <h2 className="font-semibold text-2xl">Quick Links</h2>
              <br />

              <ul className="list-none space-y-2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About us</Link>
                </li>
                <li>
                  <Link href="/">Practice Areas</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>

            {/* company  */}
            <div className="">
              <h2 className="font-semibold text-2xl">Company</h2>
              <br />

              <ul className="list-none space-y-2 mb-6">
                <li>
                  <Link href="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Cookie Preferences</Link>
                </li>
              </ul>
              <div className="mb-2">
                <p className="font-semibold mb-1 ">Office Time</p>
                <p className=" text-gray-700 max-w-[120px]">
                  10 AM to 8 PM, Mon - Sat
                </p>
              </div>
            </div>
            {/* Location  */}
            <div className="">
              <h2 className="font-semibold text-2xl">Location</h2>
              <br />
              <div className="mb-2">
                <p className="font-semibold mb-2">Office Address</p>
                <p className=" text-gray-700 max-w-[220px]">
                  206, Sukhsagar Apartment, 514, M.G Road, Front of Ram Piyau,
                  Indore
                </p>
              </div>
              <p className="font-semibold">Court Address</p>
              <p className="text-gray-700 max-w-[220px]">
                Near Court No. 10, In Front of Photo Copy{" "}
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-2xl">Social Media</h2>
              <br />
            </div>
          </div>
          {/* bottom  */}

          <div className="border-t border-gray-500 flex justify-between items-center w-full max-w-7xl py-6 text-sm text-gray-600 mx-auto mt-16">
            <div>2023 Hirwa Associates, All right reserved.</div>
            <div>Made with ❤️ in India</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
