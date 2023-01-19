import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center p-[5rem] md:px-[21.5rem] space-y-[2rem]'>
        <h2 className='text-5xl text-center font-semibold md:max-w-4xl'>Build Your Own Site Like a Lego constructor</h2>
        <p className='md:max-w-lg text-center text-[22px]'>We have created a new product that will help designers, developers and companies create websites 
            for their startups quickly and easily.
        </p>
        <a href="" className='px-4 py-2 border bg-[#E93A7D] rounded-[6.25rem] shadow-md
         text-white hover:text-[#E93A7D] hover:border-[#E93A7D] hover:bg-transparent text-[20px]'>
            Create an Accont</a>
    </section>
  )
}

export default Hero