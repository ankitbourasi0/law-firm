import React from 'react'
import Image from 'next/image'
const AuthorProfile = () => {
  return (
    <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
    <Image
      className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
      src="/images/attorneys/dummy1.jpg"
      alt="woman"
      loading="lazy"
      width={640}
      height={805}
    />
    <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
      <div>
        <h4 className="text-xl font-semibold  text-white">Ankit Bourasi</h4>
        <span className="block text-sm ">CEO-Founder</span>
      </div>
      <p className="mt-8 text-gray-300 dark:">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
    </div>
    
  </div>
  )
}

export default AuthorProfile