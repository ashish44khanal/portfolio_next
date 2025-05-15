import React from 'react'
import Button from '../Button'

export default function IntroHeading() {
  return (
    <div className="lg:w-[55%] p-8 lg:p-0">
      <h1 className="font-serif font-bold leading-[280%] lg:leading-[130%]">
        <span className="text-4xl lg:text-7xl">Design-Driven.</span> <br />{" "}
        <span className="text-blue-400 font-black lg:animate-pulse text-6xl lg:text-7xl">
          Code-Obsessed.
        </span>{" "}
        <br />
        <span className="text-4xl lg:text-7xl"> Full-Stack.</span>
      </h1>
      <p className="my-12 lg:max-w-[80%] text-justify">
        Clean code, modern UI, and scalable architecture — I build reliable
        full-stack apps from Frontend, API, Databases to cloud, delivering fast,
        secure, end-to-end solutions.
      </p>
      <Button label="Contact Me" />
    </div>
  );
}
