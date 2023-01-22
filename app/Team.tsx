import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <section id="team" className='p-5 flex flex-col md:px-[8rem] xl:px-[10rem] pt-[8rem] space-y-12 justify-center items-center'>
        <h3 className='font-semibold text-3xl text-center'>Great crew of Startup Framework</h3>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 md:space-x-8 lg:space-x-8  items-center justify-center'>
            <div className="flex flex-col space-y-2 pb-8 text-center items-center md:max-w-xs justify-center">
                <Image src='/lady.jpg' alt='lady' height={200} width={250}
                className='object-cover w-[10.625rem] h-[7.5rem] rounded-md'/>
                <h4 className="text-[1.375rem] font-semibold">Nicole Fisher</h4>
                <p className='text-[#25DAC5] text-[14px] font-semibold uppercase'>project manager</p>
                <p className='max-w-md'>Designer who makes easy to change and easy to create new elements.
                </p>
            </div>
             <div className="flex flex-col space-y-2 pb-8 text-center md:max-w-xs items-center justify-center">
                <img src='/lady2.jpg' alt='lady'  height={200} width={250}
                className='object-cover w-[10.625rem] h-[7.5rem] rounded-md'/>
                <h4 className="text-[1.375rem] font-semibold">Megan Douglas</h4>
                <p className='text-[#25DAC5] text-[14px] font-semibold uppercase'>ceo</p>
                <p className='max-w-md'>Designer who makes easy to change and easy to create new elements.</p>
            </div>
             <div className="flex flex-col space-y-2 pb-8 text-center md:max-w-xs items-center justify-center">
                <Image src='/lady3.jpg' alt='lady' 
                className='object-cover w-[10.625rem] h-[7.5rem] rounded-md' height={200} width={250}/>
                <h4 className="text-[1.375rem] font-semibold">John Carrington</h4>
                <p className='text-[#25DAC5] text-[14px] font-semibold uppercase'>Developer</p>
                <p className='max-w-md'>Designer who makes easy to change and easy to create new elements.</p>
            </div>
            <div className="flex flex-col space-y-2 pb-8 text-center md:max-w-sm items-center justify-center">
                <Image src='/bea.jpg' alt='lady' height={180} width={200}
                className='object-cover w-[10.625rem] h-[7.5rem] rounded-md'/>
                <h4 className="text-[1.375rem] font-semibold">Brandon Coloman</h4>
                <p className='text-[#25DAC5] text-[14px] font-semibold uppercase'>Designer</p>
                <p className='max-w-xs'>Designer who makes easy to change and easy to create new elements.</p>
            </div>
            <div className="flex flex-col space-y-2 pb-8 text-center md:max-w-sm items-center justify-center">
                <Image src='/black.jpg' alt='lady' height={180} width={200}
                className='object-cover w-[10.625rem] h-[7.5rem] rounded-md'/>
                <h4 className="text-[1.375rem] font-semibold">Trinity Sharlock</h4>
                <p className='text-[#25DAC5] text-[14px] font-semibold uppercase'>Writer</p>
                <p className='max-w-xs'>Designer who makes easy to change and easy to create new elements.</p>
            </div>
            <div className="flex flex-col space-y-2 pb-8 text-center md:max-w-sm items-center justify-center">
                <Image src='/man.jpg' alt='lady' height={180} width={200}
                className='object-cover w-[10.625rem] h-[7.5rem] rounded-md'/>
                <h4 className="text-[1.375rem] font-semibold">Jake Cramer</h4>
                <p className='text-[#25DAC5] text-[14px] font-semibold uppercase'>Developer</p>
                <p className='max-w-xs'>Designer who makes easy to change and easy to create new elements.</p>
            </div>
        </div>
        <a href='#' 
            className='px-4 py-2 bg-[#25DAC5] text-white rounded-full text-center hover:scale-[1.05] transition-all duration-200
            font-semdibold text-md shadow-sm hover:bg-white hover:text-[#25DAC5] border-[#25DAC5] border active:scale-[0.95]' >
            Start Work with Us</a>
    </section>
  )
}

export default Team