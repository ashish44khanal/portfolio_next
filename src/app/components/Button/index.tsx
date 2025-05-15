import React from 'react'

interface ButtonProps {
    label:string
}
export default function Button({label}:ButtonProps) {
  return (
    <button className='py-2 bg-gray-200 px-5 shadow-lg rounded-full dark:text-black'>{label}</button>
  )
}
