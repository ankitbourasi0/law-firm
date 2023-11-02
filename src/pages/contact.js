import React from "react";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
const contact = () => {

    const handleSubmit = ()=>{

    }
  return (
    <div className="w-full font-poppins ">
      <div className="w-full max-w-5xl mx-auto mt-16">
        <h1 className="text-5xl text-center  mb-2">Contact</h1>
        <p className="text-xl text-center tracking-wider text-gray-400">
          We are here to help.
        </p>

        <div className="flex justify-between mt-20 items-center">
            {/* left  */}
          <div className="md:min-h-[300px]">
            <h3 className="text-2xl font-medium mb-4">
              Contact Hirwa Association
            </h3>
            <p className=" text-left tracking-wider  text-gray-400">
              Have something to say? We are here to help.
              <br />
              Fill up the form or send email or call phone.
            </p>

            <div className="space-y-2 mt-4">
              <p className="flex items-center space-x-2  text-left tracking-wider text-gray-400">
                <ImLocation fontSize={"18px"} />
                <span> sachin.hirwa@gmail.com</span>
              </p>

              <p className="flex  items-center  space-x-2 text-left tracking-wider text-gray-400">
                <GrMail fontSize={"18px"} />
                <span> sachin.hirwa@gmail.com</span>
              </p>

              <p className="flex items-center space-x-2 text-left tracking-wider text-gray-400">
                <BsFillTelephoneFill fontSize={"18px"} />
                <span> 982730-6627</span>
              </p>
            </div>
          </div>
          
          {/* right  */}
          <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit} className=" space-y-3">
                <input type="text" placeholder="Full Name" className="px-4 py-3 rounded-lg w-full border-zinc-500 border-2"/>
                <input type="text" placeholder="Phone no." className="px-4 py-3 rounded-lg w-full border-zinc-500 border-2"/>
                <textarea placeholder="Your Message" className="px-4 py-3 min-h-[100px] rounded-lg w-full border-zinc-500 border-2" />
                    <button className="w-full py-3 bg-white rounded-lg text-black !dark:bg-black">Send Message</button>
            </form> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
