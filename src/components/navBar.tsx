import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
        <div className="fixed w-full text-gray-200 bg-gradient-to-br from-gray-800 to-gray-900 py-4 px-30 opacity-90">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-white text-2xl">Ahmed<span className="text-2xl text-cyan-400">.</span></h1>
                
                <div className='md:hidden'>
                    <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <MenuIcon className='text-white'/>
                    </IconButton>
                </div>
                
                {/* Mobile Menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 md:hidden bg-indigo-900 p-4 transition-all duration-500 ease-in-out`}>
                    <ul className="flex flex-col gap-4 font-semibold">
                        <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
                        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
                        <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
                        <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
                        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
                        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
                    </ul>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-semibold">
                <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
                        <li><a href="#about" className="hover:text-cyan-400">About</a></li>
                        <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
                        <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
                        <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
                        <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;