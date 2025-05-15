import Link from 'next/link'
import React from 'react'
import { BiLogoAws, BiLogoPostgresql } from 'react-icons/bi'
import { FaPython } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiNestjs } from 'react-icons/si'

export default function IntroInfographics() {
  return (
    <div>
        <div className="flex items-center gap-6">
            <div className="relative w-full rounded-lg h-80 overflow-hidden p-4 xl:p-8 dark:bg-gray-800">
                {/* Background image layer */}
                <div
                    className="absolute inset-0 bg-[url('/workCardBg.jpg')] bg-cover bg-no-repeat mix-blend-multiply opacity-90 pointer-events-none"
                ></div>
                <div>
                    <h1 className='font-bold text-3xl pb-2 font-serif'>Work </h1>
                    <Link href="https://fusemachines.com" target='_blank' className='inline-flex items-center gap-1 hover:text-blue-400'>
                            Fusemachines Nepal <HiExternalLink />
                    </Link>
                </div>
                <hr className='my-4 opacity-10' />
                <div className=''>
                    <h1 className='font-bold text-3xl pb-2 font-serif'>Recent </h1>
                    <ol className='list-disc list-inside text-sm leading-loose'>
                        <li>Working on Portfolio</li>
                        <li>Working on AI stuffs</li>
                        <li>Learned Python</li>
                    </ol>
                </div>
            </div>
            <div className="w-full rounded-lg h-80 fill-background" >
                <img src="/ASK.png" alt="Aashish Khanal" className='w-full h-full object-cover rounded-lg' />
            </div>
        </div>


        <div className="flex items-center gap-4 mt-6">
            <div className="relative w-[70%] h-28 px-4 py-2 rounded-lg bg-gray-700 overflow-hidden">
                {/* Background image layer */}
                <div
                    className="absolute inset-0 bg-[url('/workCardBg.jpg')] bg-cover bg-no-repeat mix-blend-multiply opacity-90 pointer-events-none"
                ></div>
                <i className='text-xs text-red-500 font-semibold'>📌 My Pick </i>
                
                <h1 className='text-2xl font-serif font-bold mt-2 leading-tight'>
                    <Link href={"https://svelte.dev/blog/whats-new-in-svelte-may-2025?ref=dailydev"} target='_blank' className='hover:text-blue-400 transition-colors' >
                        What is new in Svelte: May 2025
                        <HiExternalLink className="inline align-baseline ml-1" />
                    </Link>
                </h1>
            </div>
            <div className='w-[30%] grid grid-cols-3 gap-x-4 gap-y-4'>
                {[RiTailwindCssFill, RiNextjsFill, SiNestjs, BiLogoPostgresql, BiLogoAws, FaPython].map((Icon, idx) => (
                    <div key={idx} className="relative p-2 rounded-lg mx-auto w-12 h-12">
                    {/* Glass background */}
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-md border  rounded-lg"></div>
                    {/* Icon */}
                    <Icon className="relative text-3xl text-gray-800 z-10 flex items-center justify-center w-full h-full" />
                    </div>
                ))}

            </div>

        </div>
    </div>
  )
}
