import React from 'react'

const Burners = () => {
  return (
    <section className='flex flex-col md:flex-row p-5 md:px-[11.5rem] space-y-6 md:space-x-6'>
        <div className='flex flex-col md:w-1/3 space-y-6 items-center justify-center'>
            <img src="/lady.jpg" alt="" className='h-[170px] w-[210px] rounded-[10px]' />
            <p className='text-[18px] text-center'>A high-quality solution for a beautiful startup website.</p>
        </div>
        <div className='w-1 h-[109px] bg-[#EBEAED]' />

        <div className= 'space-y-6 items-center justify-center flex flex-col md:w-1/3'>
            <img src="/lady2.jpg" alt="" className='h-[170px] w-[210px] rounded-[10px] object-fill' />
            <p className='text-[18px] text-center'>Startups can save money on design and code and use those savings to develop the business.</p>
        </div>
        <div className='w-1 h-[109px] bg-[#EBEAED]' />

         <div className='flex flex-col md:w-1/3 space-y-6 items-center justify-center'>
            <img src="/lady3.jpg" alt="" className='h-[170px] w-[210px] rounded-[10px]'  />
            <p className='text-[18px] text-center'>
                Startup Framework includes great form options for your startup projects.
            </p>
        </div>
    </section>
  )
}

export default Burners;