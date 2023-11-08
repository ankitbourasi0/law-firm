"use client";
import React, { useState } from "react";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { PiPaperPlaneRightFill } from "react-icons/pi";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email)


    let processedMail = `The contact number: ${phone}. 
    
    Message : ${message}
    
    `
    let email1 = JSON.stringify(email);
    let message1 = JSON.stringify(processedMail);
    const obj = { email: email1, message: message1 };
    console.log(email, message);

    await fetch("/api/email/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  };
  return (
    <div className="w-full font-poppins min-h-[100vh] bg-gradient-to-br from-gray-700 via-gray-900 to-black text-gray-400">
      <div className="w-full max-w-5xl mx-auto py-16 px-10">
        <h1 className="text-6xl text-center font-extrabold mb-2">Contact Us</h1>
        <p className="text-xl text-center tracking-wider ">
          We are here to help.
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-6 mt-20 ">
          {/* left  */}
          <div className="md:min-h-[300px]">
            <h3 className="text-2xl font-medium mb-4">
              Contact Hirwa Association
            </h3>
            <p className=" text-left tracking-wider flex-wrap ">
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
          <div className="w-full max-w-lg ">
            <form onSubmit={handleSubmit}   className=" space-y-3 form-control">
             
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
              className="input input-md input-bordered input-info  w-full "
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Your Phone"
              className="input input-md input-bordered input-info  w-full "
            />

            <textarea
            type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
              className="textarea textarea-bordered w-full textarea-info "
              placeholder="Your Message"
            ></textarea>
            <button className="btn  btn-md  btn-accent w-full">
              Send Message <PiPaperPlaneRightFill size={18} />
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
