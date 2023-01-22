import React from 'react'
import Image from 'next/image'

const Testimons = () => {
  return (
    <section id="team" className='p-5 flex flex-col md:px-[8rem] lg:px-[10rem] pt-[8rem] justify-center items-center space-y-12'>
        <h3 className='capitalize text-center text-3xl font-semibold'>What our clients are saying</h3>
        <div className=' grid md:grid-cols-2'>
            <div className='flex flex-col md:flex-row justify-center items-center md:justify-start pb-8 md:items-start md:space-x-4 md:mr-5'>
                <div className='flex items-center justify-center'>
                    <Image src="/lady3.jpg" alt="lady" height={400} width={600} className='object-cover h-[6rem] w-[6rem] rounded-full' />
                </div>
                <div className=' space-y-4 text-center md:text-left flex flex-col'>
                    <p className='text-[18px] max-w-sm'>Extremely easy to use, helped us develop our Vote for George Washington
                    thi si good micro-site extre- mely quickly! We will definitely use it again for other projects
                    </p>
                    <h4 className='font-semibold'>Jasmine Andrews</h4>
                    <p>Microsoft</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start pb-8 md:space-x-4 md:flex-row'>
                <div className='flex items-center justify-center'>
                    <Image src="/lady3.jpg" alt="lady" height={400} width={600} className='object-cover h-[6rem] w-[6rem] rounded-full' />
                </div>
                <div className=' space-y-4 text-center md:text-left flex flex-col'>
                    <p className='text-[18px] max-w-sm'>Extremely easy to use, helped us develop our Vote for George Washington
                     micro-site extre- mely quickly! We will definitely use it again for other projects
                    </p>
                    <h4 className='font-semibold'>Jasmine Andrews</h4>
                    <p className='text-[16px]'>Microsoft</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:mr-5 md:justify-start items-center pb-8 md:items-start justify-center md:space-x-4'>
                <div className='flex justify-center items-center'>
                    <Image src="/bea.jpg" alt="lady" height={90} width={120} className='object-cover h-[6rem] w-[6rem] rounded-full' />
                </div>
                <div className=' space-y-4 text-center md:text-left flex flex-col'>
                    <p className='text-[18px] max-w-sm'>Extremely easy to use, helped us develop our Vote for George Washington
                     micro-site extre- mely quickly! We will definitely use it again for other projects
                    </p>
                    <h4 className='font-semibold'>Jasmine Andrews</h4>
                    <p className='text-[16px]'>Microsoft</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-start md:items-start justify-center pb-8 items-center md:space-x-4'>
                <div className="flex items-center justify-center">            
                    <Image src="/black.jpg" alt="lady" height={90} width={120} className=' h-[6rem] w-[6rem] object-cover rounded-full' />
                </div>
                <div className=' space-y-4 text-center md:text-left flex flex-col'>
                    <p className='text-[18px] max-w-sm'>Extremely easy to use, helped us develop our Vote for George Washington
                     micro-site extre- mely quickly! We will definitely use it again for other projects
                    </p>
                    <h4 className='font-semibold'>Jasmine Andrews</h4>
                    <p className='text-[16px]'>Microsoft</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimons