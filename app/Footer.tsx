import React from 'react'

const Footer = () => {
  return (
    <section className='w-full'>
        <div className='flex w-full flex-col md:flex-row pt-[8rem] p-5 md:px-[8rem] lg:px-[10rem] md:space-x-4'>
            <div className='flex flex-col'>
                <h3 className="text-xl font-semibold">Startup</h3>
                <p className='text-[18px] max-w-xs'>Be sure to look at our Terms of Use and Privacy Policy</p>
            </div>
            <div className='flex flex-col space-y-4'>
                <h4>About</h4>
                <ul className="flex flex-col space-y-2">
                    <li><a href=''>About Us</a></li>
                    <li><a href=''>Blog</a></li>
                    <li><a href=''>Team</a></li>
                    <li><a href=''>Career</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </div>
            <div className='flex flex-col space-y-4'>
                <h4>Company</h4>
                <ul className="flex flex-col space-y-2">
                    <li><a href=''>Privacy</a></li>
                    <li><a href=''>Support</a></li>
                    <li><a href=''>Help Desk</a></li>
                    <li><a href=''>FAQ</a></li>
                </ul>
            </div>
            <div className='flex flex-col space-y-2'>
                <h4>Subscribe our Newsletter</h4>
                <div className="flex items-start justify-center">
                    <input type="text" className="rounded-full px-4 border py-2 focus:outline-none" placeholder='Your Email' />
                    <button className='bg-[#25DAC5] border-[#25DAC5] px-4 py-2 text-white text-[18px] duration-200
                     focus:outline-none hover:text-[#25DAC5] hover:bg-white hover:scale-[1.05] active:scale-[0.95] transition-all
                    flex items-center justify-center rounded-full'>Subscribe</button>
                </div>
                <div>
                    <span>Facebook</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer