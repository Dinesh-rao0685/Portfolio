import React from 'react'
import Mongo from "../assets/mongodb.jpg"
import css from "../assets/css.jpg"
import js from "../assets/javascript.png"
import java from "../assets/java.png"
import node from "../assets/node.png"
import python from "../assets/python.webp"
import react from "../assets/react.svg"
import express from "../assets/express.png"
const Experience = () => {
  return (
     <div name="Experiance" className='max-w-full border border-b-2 gap-3   flex flex-col w-full   py-4 p-2 md:px-16 px-6 break-words '>
      <h2 className='font-bold md:text-3xl text-2xl'>Experiance</h2>
      <p className='text-lg'>I've more than 2 years of experiance in below technologies.</p>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
        <div className=' flex flex-col rounded-full shadow-md items-center p-2 border border-gray-200'>
          <img src={css} alt="" width={100} />
          <p className='text-xl font-semibold'>CSS</p>
        </div>
        <div className=' flex flex-col rounded-full shadow-md items-center p-2 border border-gray-200'>
          <img src={js} alt="" width={100} />
          <p className='text-xl font-semibold'>JavaScript</p>
        </div>
        <div className=' flex flex-col rounded-full shadow-md items-center p-2 border border-gray-200'>
          <img src={express} alt="" width={100} />
          <p className='text-xl font-semibold'>Express</p>
        </div>
        <div className=' flex flex-col rounded-full shadow-md items-center p-2 border border-gray-200'>
          <img src={react} alt="" width={100} />
          <p className='text-xl font-semibold'>React Js</p>
        </div>
        <div className=' flex flex-col rounded-full shadow-md items-center p-2 border border-gray-200'>
          <img src={node} alt="" width={100} />
          <p className='text-xl font-semibold'>Node Js</p>
        </div>
      </div>
    </div>
  )
}

export default Experience
