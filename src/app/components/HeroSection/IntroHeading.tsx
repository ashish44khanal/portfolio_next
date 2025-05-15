import React from 'react'
import Button from '../Button'

export default function IntroHeading() {
  return (
    <div className='w-[55%]'>
        <h1 className='text-7xl font-serif font-bold leading-[130%]'>
            Design-Driven. <br /> <span className='text-blue-400 font-black animate-pulse'>Code-Obsessed.</span> <br /> Full-Stack.
        </h1>
        <p className='my-12 max-w-[80%] text-justify'>Clean code, modern UI, and scalable architecture — I build reliable full-stack apps from Frontend, API, Databases to cloud, delivering fast, secure, end-to-end solutions.</p>
        <Button label="Contact Me" />
    </div>
  )
}
