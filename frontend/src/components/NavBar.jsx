import React from 'react';
import Logo from "../assets/logo.png";


const Navbar = () => {
    return (
        <>
            <div className="bg-amber-600 text-amber-600">.</div>
            <nav className="text-black p-12">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img src={Logo} alt="Logo" className="h-20 w-auto" />
                        <a href="projects" className="text-2xl font-bold hover:text-amber-600 pl-20">
                            Projects
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-10 text-2xl font-bold">
                        <a href="contactme" className="hover:text-amber-600 border-black hover:border-amber-600 border-2 rounded-lg p-2">
                            Contact Me
                        </a>
                    </div>
                </div>
            </nav>
            <div className="w-full">

            </div>
        </>
    );
};

export default Navbar;
