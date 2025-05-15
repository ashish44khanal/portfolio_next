import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

 export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-2 lg:px-10 py-4 lg:rounded-full lg:my-4 dark:bg-gray-800 shadow-xl">
      <div className="flex items-center space-x-2">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src="/pp.png"
            alt="Aashish Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="font-bold capitalize text-xl tracking-tighter">
          Aashish Khanal
        </h1>
        <RiVerifiedBadgeFill className="text-inherit" />
      </div>
      <button className="py-2 bg-gray-200 text-sm lg:text-base px-4 lg:px-5 shadow-lg rounded-full dark:text-black">
        Book a Call
      </button>
    </div>
  );
}
