
const Navbar = () =>{
    return (
        <nav className="flex items-center justify-between p-5 md:px-[11.5rem]">
            <h3 className="text-3xl font-normal text-[#1E0E62]">Startup</h3>
            <ul className="hidden md:flex space-x-6 justify-center items-center">
                <li><a href="#">Tour</a></li>
                <li><a href="#">Prices</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            <div className="hidden md:block justify-center items-center space-x-6">
                <a href="" 
                  className="cursor-pointer px-4 text-[18px] shadow-sm rounded-[6.25rem] bg-transparent border border-[#25DAC5] text-[#25DAC5] py-2 hover:text-white
                  hover:bg-[#25DAC5]">
                    Login</a>
                <a href="" 
                className="cursor-pointer px-4 py-2 text-[18px] text-white bg-[#25DAC5] border
                 hover:bg-transparent shadow-sm hover:border-[#25DAC5] hover:text-[#25DAC5] rounded-[6.25rem]">
                    Sign Up</a>
            </div>
        </nav>
    )
}

export default Navbar;

