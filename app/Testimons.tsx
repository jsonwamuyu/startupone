import React from 'react'
import Image from 'next/image'

const Testimons = () => {
  return (
    <section className='p-5 md:px-[11.5rem] pt-[8rem] grid md:grid-cols-2 md:space-x-8 space-y-5'>
        <div className='space-x-5 md:flex md:wd-1/2'>
            <Image src="/lady.jpg" alt="lady" className='h-[70px] w-[70px] rounded-full' height={100} width={100}/>
            <div className=' space-y-4 text-center md:text-left'>
                <p className='text-[18px]'>Extremely easy to use, helped us develop our Vote for George Washington
                     micro-site extre- mely quickly! We will definitely use it again for other projects
                </p>
                <h4 className='font-semibold'>Jasmine Andrews</h4>
                <p className='text-[16px]'>Microsoft</p>
            </div>
        </div>

        <div className='space-x-5 md:flex md:wd-1/2'>
            <Image src="/lady.jpg" alt="lady" className='h-[70px] w-[70px] rounded-full' height={100} width={100}/>
            <div className=' space-y-4 text-center md:text-left'>
                <p className='text-[18px]'>Extremely easy to use, helped us develop our Vote for George Washington
                     micro-site extre- mely quickly! We will definitely use it again for other projects
                </p>
                <h4 className='font-semibold'>Jasmine Andrews</h4>
                <p className='text-[16px]'>Microsoft</p>
            </div>
        </div>
        <div className='space-x-5 md:flex md:wd-1/2'>
            <Image src="/lady.jpg" alt="lady" className='h-[70px] w-[70px] rounded-full' height={100} width={100}/>
            <div className=' space-y-4 text-center md:text-left'>
                <p className='text-[18px]'>Extremely easy to use, helped us develop our Vote for George Washington
                     micro-site extre- mely quickly! We will definitely use it again for other projects
                </p>
                <h4 className='font-semibold'>Jasmine Andrews</h4>
                <p className='text-[16px]'>Microsoft</p>
            </div>
        </div>
        <div className='space-x-5 md:flex md:wd-1/2'>
            <Image src="/lady.jpg" alt="lady" className='h-[70px] w-[70px] rounded-full' height={100} width={100}/>
            <div className=' space-y-4 text-center md:text-left'>
                <p className='text-[18px]'>Extremely easy to use, helped us develop our Vote for George Washington
                     micro-site extre- mely quickly! We will definitely use it again for other projects
                </p>
                <h4 className='font-semibold'>Jasmine Andrews</h4>
                <p className='text-[16px]'>Microsoft</p>
            </div>
        </div>
    </section>
  )
}

export default Testimons