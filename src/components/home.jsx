import React from 'react'
import myImg from "../assets/my.jpg";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <div name="Home" className='max-w-full border border-b-2   py-4 flex md:flex-row flex-col md:justify-between w-full pt-24   p-2 md:px-16 px-6 break-words '>
    {/* left part */}
      <div className='space-y-4 md:w-1/2'>
      <p className='font-semibold text-xl'>Welcome In My Feed</p>
      <p className='font-bold text-3xl '>Hello, Im a <TypeAnimation
  sequence={[
    "Web Developer",
    1500,
    "Programmer",
    1500,
    "Frontend Developer",
    1500,
    "AI Learner",
    1500,
  ]}
  wrapper="p"
  speed={50}
  repeat={Infinity}
  className="font-semibold text-2xl text-red-600"
/></p>
      <p className='text-lg  text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non illum, iusto, autem sunt aliquam vero aspernatur, nostrum aliquid nemo ratione numquam architecto eaque sequi harum. Reiciendis, cum tempore pariatur ab deserunt quo nemo veritatis vero expedita dolore nesciunt! Veritatis, recusandae! Dignissimos labore quo animi sapiente ducimus? Commodi, placeat veritatis.</p>
      <div className='flex md:flex-row flex-col items-center gap-4 md:justify-between'>
      <div className='flex flex-col gap-1 items-center'>
        <p className='text-xl font-semibold'>Available On</p>
        <p className='flex flex-row gap-2 text-lg'>
           <i class="fa-brands fa-linkedin"></i>
           <i class="fa-brands fa-youtube"></i>
           <i class="fa-brands fa-github"></i>
           <i class="fa-solid fa-paper-plane"></i>
        </p>
      </div>
      <div className='flex flex-col gap-1 items-center'>
        <p className='text-xl font-semibold'>Currently Working On</p>
        <p className='flex flex-row gap-2 text-lg'>
           <i class="fa-brands fa-react"></i>
           <i class="fa-brands fa-node-js"></i>
           <i class="fa-brands fa-mdb"></i>
           <i class="fa-brands fa-git-alt"></i>
        </p>
      </div>
      </div>
      </div>
     {/* right part */}
      <div className='md:w-1/2 p-6  flex items-center justify-center rounded-full'>
    <img src="https://scintillating-seahorse-5ca99e.netlify.app/assets/photo-CRiQkxfM.avif" alt="" className='rounded-full  md:w-3/4 w-full' />
      </div>
      
    </div>
  )
}

export default Home
