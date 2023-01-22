import React from 'react'

const Content = () => {
  return (
    <section className='p-5 md:px-[8rem] lg:px-[10rem] pt-[6rem] flex flex-col'>
        <h2 className='text-4xl font-semibold pb-10'>Easy steps</h2>
        <div className='space-x-4 flex justify-start items-start pb-8 border-l-2'>
            <div className='flex flex-col space-y-0 items-center -ml-4'>
                <div className='flex justify-center items-center text-md text-white bg-[#EBEAED] rounded-full h-8 w-8'>1</div>
            </div>
            
            <div className='flex flex-col space-y-5'>
                <h3 className='text-md font-semibold'>How Startup Framework Works?</h3>
                <p className='text-[18px] md:max-w-3xl'>
                    The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website.
                     It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
                </p>
            </div>
        </div>
        <div className='space-x-4 flex justify-start items-start pb-8 border-l-2 '>
            <div className='flex flex-col space-y-0 items-center -ml-4'>
                <div className='flex justify-center items-center text-md text-white bg-[#EBEAED] rounded-full h-8 w-8'>2</div>
            </div>
            
            <div className='flex flex-col space-y-5'>
                <h3 className='text-md font-semibold'>Twenty five awesome samples</h3>
                <p className='text-[18px] md:max-w-3xl'>
                    The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use
                     as is or you can add new blocks from UI Kit. By choosing one of the 25 configurations of
                      the future startup, the process of creation is simple and easy.
                </p>
                <div className='flex space-x-5 justify-start'>
                    <img src="/lady2.jpg" alt="design" className='h-[113px] w-[170px]  rounded-[5px]' />
                    
                    <div className='flex-col space-y-4 flex'>
                        <h2 className='uppercase font-semibold text-[14px]'>Feel our design</h2>
                        <p className='max-w-sm'>Startup Design Framework contains components which can easily be inte-grated into almost any design. </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='space-x-4 flex justify-start items-start pb-8 '>
            <div className='flex flex-col space-y-0 items-center -ml-4'>
                <div className='flex justify-center items-center text-md text-white bg-[#EBEAED] rounded-full h-8 w-8'>3</div>
            </div>
            
            <div className='flex flex-col space-y-5'>
                <h3 className='text-md font-semibold'>Variety of designs</h3>
                <p className='text-[18px] md:max-w-3xl'>
                     You can decide whether to create your site using UI Kit blocks or samples. 
                     The blocks can merge together in various combinations.
                </p>
                <a href="" className='py-2 px-4 bg-[#25DAC5] rounded-[6.5rem] max-w-[9rem] text-[18px] hover:scale-[1.05] 
                transition-all duration-200 active:scale-[0.95]
                    text-center hover:bg-transparent border hover:text-[#25DAC5] text-white hover:border-[#25DAC5]'>
                    Learn More
                </a>
            </div>
        </div>

    </section>
  )
}

export default Content