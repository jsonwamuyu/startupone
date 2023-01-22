import React from 'react';
import Image from 'next/image';

const Burners = () => {
  return (
    <section className='flex flex-col md:flex-row p-5 md:px-[8rem] lg:px-[10rem] md:space-x-6'>
        <div className='flex flex-col md:w-1/3 space-y-6 items-center justify-center'>
            <div className='flex justify-center items-center'>
                <Image src="/lady.jpg" alt="" className='h-[170px] w-[210px] object-cover rounded-[10px]' height={400} width={600}/>
            </div>
            <p className='text-[18px] text-center'>A high-quality solution for a beautiful startup website.</p>
        </div>
        <div className='w-1 h-[109px] bg-[#EBEAED] hidden md:flex' />

        <div className= 'space-y-6 items-center justify-center flex flex-col md:w-1/3'>
            <div className='flex justify-center items-center'>
                <Image src="/lady2.jpg" alt="" className='h-[170px] w-[210px] rounded-[10px] object-cover' height={400} width={600} />
            </div>
            <p className='text-[18px] text-center'>Startups can save money on design and code and use those savings to develop the business.</p>
        </div>
        <div className='w-1 h-[109px] bg-[#EBEAED] hidden md:flex' />

         <div className='flex flex-col md:w-1/3 space-y-6 items-center justify-center'>
            <div className="flex justify-center items-center">
                <Image src="/lady3.jpg" alt="" className='h-[170px] w-[210px] rounded-md object-cover' height={400} width={600} />
            </div>
            <p className='text-[18px] text-center'>
                Startup Framework includes great form options for your startup projects.
            </p>
        </div>
    </section>
  )
}

export default Burners;