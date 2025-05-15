import React from 'react'
import IntroHeading from './IntroHeading'
import IntroInfographics from './IntroInfographics'

export default function HeroSection() {
  return (
    <section className="container lg:px-14 mx-auto flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-10 my-20">
      <IntroHeading />
      <IntroInfographics />
    </section>
  );
}
