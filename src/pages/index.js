
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import useMediaQuery from "@/utils/useCustomScreenSize";
import MobileFooter from "@/components/Footer";
import Counter from "@/utils/Counter";
import PostCard from "@/components/PostCard";
import { getAllPost } from "./api";
import {BiDownArrowAlt} from "react-icons/bi"
import "react-multi-carousel/lib/styles.css";
import AuthorProfile from "@/components/AuthorProfile";
import ScrollToTopButton from "@/components/bottomToTop";
import { useScroll } from "framer-motion";
export async function getStaticProps() {
  const result = (await getAllPost()) || [];

  return {
    props: { result },
  };
}
const Home = ({ result }) => {
  const scroll = useScroll();

  const [dataLoaded, setDataLoaded] = useState(false);
  const [postData, setPostData] = useState(false);
  const attorneys = [
    {
      name: "Sachin Hirwa",
      photo: "/images/attorneys/dummy1.jpg",
      profile: "Head Lawyer & Founder Hirwa Associates",
    },
    {
      name: "Shraddha Kapoor",
      photo: "/images/attorneys/profilecard1.png",
      profile: "Junior Lawyer",
    },
    {
      name: "Ankit Bourasi",
      photo: "/images/attorneys/dummy1.jpg",
      profile: "Intern",
    },
    {
      name: "Aryan Danal",
      photo: "/images/attorneys/dummy1.jpg",
      profile: "Intern",
    },
  ];



  const Profiles = attorneys.map((e, index) => {
    return <AuthorProfile key={index} attorneys={e} />;
  });

  const ExternalLink = ({
    href,
    children,
  }) => {
    return (
      <a
        href={href}
        target={"_blank"}
        className="text-zinc-900 hover:text-zinc-600 transition"
      >
        {children}
      </a>
    );
  };

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

  const scrolll = () => {
    ("use client");
    let pageHeight = window.innerHeight;

    window.scrollTo({ top: pageHeight, behavior: "smooth" });
  };
  return (
    <div className="w-full bg-[#1E1E1E] ">
      <ScrollToTopButton />

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
              <Image
                alt="hammerIcon"
                src="/images/icons/hammerlaw.png"
                className="md:w-16 w-12"
                width={96}
                height={96}
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
         <div className="w-full ml-auto ">
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
              onClick={scrolll}
              className=" motion-safe:animate-bounce rounded-full p-4 bg-[#ebd234]   hover:bg-yellow-400     shadow-gray-200"
            >
            <BiDownArrowAlt size={26} />
            </m.button>
         </div>
          </div>
          <div className=" flex justify-center items-center ">
            <Image
              src="/images/books.png"
              className="object-cover w-full max-w-[680px]"
              width={680}
              height={680}
              alt="bookIcon"
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
                {`
                At Hirwa Law Firm, we are dedicated to providing top-notch legal
                representation and guidance tailored to your individual needs.
                With over 25 years of combined experience, our team of highly
                skilled attorneys specializes in a diverse divers range of legal
                areas, ensuring that no matter your issue, we\'ve got your
                covered.`}
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
                  <Image
                    src="/images/icons/family1.png"
                    className="md:w-14  md:h-14 w-10 h-10  "
                    width={140}
                    height={140}
                    alt="familylaw"
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
                  <Image
                    src="/images/icons/personal.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                    width={140}
                    height={140}
                    alt="personalLaw"
                  />
                </div>
              </div>
              <h3 className="text-[16px] md:text-2xl text-amber-100 font-bold my-4">
                Personal Injury
              </h3>
              <p className="text-[12px] md:text-[16px]">
                {` Securing compensation for injuries resulting from someone else\'s
                negligence.`}
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
                    src="/images/icons/criminal.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                    width={140}
                    height={140}
                    alt="criminalLaw"
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
                  <Image
                    src="/images/icons/business.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                    width={140}
                    height={140}
                    alt="busineessLaw"
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
                  <Image
                    src="/images/icons/planning.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                    width={140}
                    height={140}
                    alt="landLaw"
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
                  <Image
                    src="/images/icons/realestate.png"
                    className="md:w-14  md:h-14 w-10 h-10  text-yellow-200  "
                    width={140}
                    height={140}
                    alt="realstateLaw"
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
            <Image
              src="/images/97.jpg "
              alt=""
              unoptimized
              className="w-[650px] h-[580px]"
              width={650}
              height={580}
            />
            <Image
              src="/images/gallary/4.png"
              className="w-[620px] h-[480px] absolute left-24 top-[50px] rounded-lg"
              alt="whychooseus"
              width={620}
              height={480}
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
            <Link href="/contact">Consult</Link>
            </button>
          </div>
          <div className="md:hidden block  w-full  ">
            {/* <Image src="/images/criminalImage.jpg"  className=" w-full  "  width={""}/> */}
          </div>
        </div>

        {/* Meet with your lawyers */}
        <div className="min-h-[100vh] md:relative mb-10">
          <div className="py-20 text-white">
            <div className="xl:container mx-auto px-6 md:px-12">
              <div className="mb-16 md:w-2/3 lg:w-1/2">
                <h2 className="mb-4 text-2xl font-bold   md:text-4xl">
                  Meet our Attorneys
                </h2>
                <p className=" dark:text-gray-300">
                  Meet our experienced team of dedicated attorneys, each
                  bringing a unique blend of expertise, knowledge, and
                  commitment to delivering exceptional legal services. Discover
                  more about our accomplished legal professionals below
                </p>
              </div>
              <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Profiles}
              </div>
            </div>
          </div>
        </div>

        {/* //Blog Post  */}

        <div className="w-full bg-yellow-50 md:py-16 pt-12 pb-16 md:px-10 text-neutral-800 ">
          <div className=" md:mb-16 mb-6  flex flex-col items-center">
            <h1 className="md:text-xl md:px-6 md:py-2 px-3 py-1 text-xs bg-orange-500 rounded-full text-yellow-100  md:mb-4 mb-2  font-semibold text-center   md:capitalize uppercase ">
              OUR BLOG
            </h1>
            <div className="md:text-7xl text-3xl  font-semibold">
      
              <span className="">News </span>
              <span className=""><i> & Articles</i></span>
            </div>
            {/* <p className=" text-center lg:mx-auto lg:w-6/12 text-gray-700 text-lg dark:text-gray-300">
              Insights, updates, and expert perspectives: Explore our blog for
              the latest in law. Stay informed, get practical advice, and gain
              valuable insights into the legal world.
            </p> */}
          </div>
          <div className="  md:px-24 px-8 max-w-6xl mx-auto  ">
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

        <div className="w-full bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 min-h-[430px] px-6 py-28">
       
          <div className="w-full  ">
            <div className="grid md:grid-cols-2 w-full mx-auto max-w-7xl">
              <div>
                <h2 className="text-2xl md:text-5xl   font-semibold">
                  Are You in Trouble with any
                  <br />
                  Cases? Contact us!
                </h2>
                <br />
                <p className="">
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
                <Link href="/contact">Consult Now</Link>
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
                  <Link href="/contact">Contact</Link>
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
              <h2 className="font-semibold text-2xl">Social Links</h2>
              <div className="flex flex-col justify-center my-4">
     

      {/* website links */}
      <div className="flex flex-col space-y-4">
       

        {/* youtube */}
        <ExternalLink href="https://www.youtube.com/channel/UCZHC5DaOrrDRoWLrITREpMA">
          Youtube
        </ExternalLink>
        {/* medium */}
        <ExternalLink href="https://medium.com/@nextdevelopment1111">
          Medium
        </ExternalLink>
        {/* twitter */}
        <ExternalLink href="https://twitter.com/NextDev1111">
          Twitter
        </ExternalLink>
      </div>
    </div>
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
