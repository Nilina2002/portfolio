import React, { useState } from 'react';
import Logo from "../assets/logo.png";
import ProfilePic from "../assets/pf.jpg";
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <>
            <div className="bg-amber-600 text-amber-600">
                .
            </div>
            <nav className="text-black p-12">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img src={Logo} alt="Logo" className="h-20 w-auto" href="/" />
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
            <div className="w-full text-center">
                <img id="nilina-image" src={ProfilePic} alt="Photo of Zachary Jordan" className="cursor-pointer xl:mt-10 inline-block border-gray-900 duration-300 ease hover:border-amber-600 shadow-md border-8 h-auto w-auto max-w-full max-h-full rounded-full" />
            </div>

            <div>
                <div class="animate__animated animate__fadeInUp p-14 delay2 mt-10 xl:mt-14 text-3xl lg:text-5xl font-extrabold text-gray-900">
                    Hey, I'm <span class="text-amber-600">Nilina Nilaksha. </span> Here, you can check out what I'm working on. I try my best to create things with ❤
                </div>
            </div>
        </>
    );
};

export default Navbar;
