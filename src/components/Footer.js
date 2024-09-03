import Link from "next/link";
import React from "react";

const MobileFooter = () => {
  return (
    <div className="bg-yellow-50 w-full  p-4 flex flex-col justify-center text-black">
      <div className="w-full mx-auto mt-2   ">
        {/* Logo name description */}
        <div className="">
          <h2 className="font-semibold text-xl">Hirwa Associates</h2>
          <br />
          <p className="text-sm text-gray-600 ">
            Welcome to Hirwa Associates, your trusted partner in legal matters.
            We are providing the best
          </p>
        </div>
        <br />

        <div className="grid grid-cols-2 gap-4">
          {/* Quick links      */}
          <div className="">
            <h2 className="font-semibold mb-3">Quick Links</h2>

            <ul className="list-none space-y-1 text-sm text-gray-600">
              <li>
                <Link href="./">Home</Link>
              </li>
              <li>
                <Link href="./">About us</Link>
              </li>
              <li>
                <Link href="./">Practice Areas</Link>
              </li>
              <li>
                <Link href="./">Blog</Link>
              </li>
              <li>
                <Link href="./">Contact</Link>
              </li>
            </ul>
          </div>

          {/* company  */}
          <div className="">
            <h2 className="font-semibold  mb-3">Company</h2>

            <ul className="list-none space-y-1 text-sm text-gray-600">
              <li>
                <Link href="./">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="./">Privacy Policy</Link>
              </li>
              <li>
                <Link href="./">Cookie Preferences</Link>
              </li>
            </ul>
          </div>

          {/* Location  */}
          <div className="">
            <h2 className="font-semibold mb-3 ">Location</h2>
            
            <p className="font-semibold text-sm">Office Address</p>
            <p className="text-sm text-gray-500 ">
              206, Sukhsagar Apartment, 514, M.G Road, Front of Ram piyau, Indore
            </p>
          </div>

          {/* Address */}
          <div className="">
          <h2 className="font-semibold mb-3 "><br/></h2>

          <p className="font-semibold text-sm">Court Address</p>


            <p className="text-sm text-gray-500">
              Near Court No. 10, In Front of Photo Copy 
            </p>
          </div>
        
          <h2 className="font-semibold ">Office Time -</h2>
         
         <p className=" font-semibold">10 AM : 8 PM </p>
        
        </div>
      </div>
      {/* bottom  */}

      <div className="border-t border-gray-500 flex justify-between items-center w-full  pb-6 pt-2 text-xs text-gray-600 mx-auto mt-16">
        <div>2023 Hirwa Associates, All right reserved.</div>
        <div>Made with ❤️ in India</div>
      </div>
    </div>
  );
};

export default MobileFooter;
