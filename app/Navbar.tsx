"use client"
import {useState} from 'react';
import Image from 'next/image';


const Navbar = () =>{

    const [toggle, setToggle] = useState(false)

    return (
        <section className="w-full shadow-sm fixed z-50 backdrop-blur-xl">
            <nav className="flex items-center justify-between p-5 md:px-[8rem] lg:px-[10rem] h-full w-full">
                <h3 className="text-3xl font-normal text-[#1E0E62]">Startup</h3>
                <ul className="hidden md:flex space-x-6 justify-center items-center">
                    {['Tour','Prices','About','FAQ','Support'].map((item, i) => (
                        <li key={item+i}><a href={`#${item}`} onClick={() =>setToggle(false)}>{item}</a></li>
                    ))}
                </ul>
                <div className="hidden lg:block justify-center items-center space-x-6">
                    <a href="" 
                    className="cursor-pointer px-4 text-[18px] shadow-sm rounded-[6.25rem] bg-transparent border border-[#25DAC5] text-[#25DAC5] py-2 hover:text-white
                    hover:bg-[#25DAC5]">
                        Login</a>
                    <a href="" 
                    className="cursor-pointer px-4 py-2 text-[18px] text-white bg-[#25DAC5] border
                    hover:bg-transparent shadow-sm hover:border-[#25DAC5] hover:text-[#25DAC5] rounded-[6.25rem]">
                        Sign Up</a>
                </div>

                {/* Smmal Devices */}
                <div className="md:hidden flex items-center justify-center relative hover:scale-[1.05]
                 transition-all duration-200 bg-[#25DAC5] p-2 rounded-full cursor-pointer active:scale-[0.95]">
                    <Image height={10} width={10} alt="logo" src="./menu.svg" 
                    className='object-contain h-5 w-5' onClick={()=> setToggle(true)}/>
                </div>
                    {
                        toggle && (
                            <div className=' md:hidden absolute top-0 right-0 w-full py-5 pb-12 pl-12 pr-5
                             bg-white flex h-auto z-50 flex-col shadow-lg items-start justify-start space-y-12'>
                                <div className='flex justify-between flex-row items-start w-full h-full'>
                                    <ul className="flex  flex-col space-y-6 justify-start items-start">
                                        {['Tour','Prices','About','FAQ','Support'].map((item, i) => (
                                            <li key={item+i}><a href={`#${item}`} onClick={() =>setToggle(false)}>{item}</a></li>
                                        ))}
                                    </ul>
                                    <div className='flex justify-center items-center w-9 h-9 rounded-full text-white
                                    hover:scale-[1.05] transition-all duration-200 active:scale-[0.95]
                                    cursor-pointer bg-[#25DAC5]' onClick={() =>setToggle(false)}>
                                        <span>X</span>
                                    </div>
                                </div>
                                <div className="flex justify-start items-start space-x-6">
                                    <a href="" 
                                    className="cursor-pointer px-4 text-[18px] shadow-sm rounded-[6.25rem] bg-transparent border border-[#25DAC5] text-[#25DAC5] py-2 hover:text-white
                                    hover:bg-[#25DAC5]">
                                        Login</a>
                                    <a href="" 
                                    className="cursor-pointer px-4 py-2 text-[18px] text-white bg-[#25DAC5] border
                                    hover:bg-transparent shadow-sm hover:border-[#25DAC5] hover:text-[#25DAC5] rounded-[6.25rem]">
                                        Sign Up</a>
                                </div>
                            </div>
                        )
                    }
            </nav>
        </section>
    )
}

export default Navbar;

