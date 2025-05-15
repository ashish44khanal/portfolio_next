import React from 'react'
import IntroHeading from './IntroHeading'
import IntroInfographics from './IntroInfographics'

export default function HeroSection() {
  return (
    <section className='container px-14 mx-auto flex items-center gap-10 my-20'>
        <IntroHeading />
        <IntroInfographics />
    </section>
  )
}
