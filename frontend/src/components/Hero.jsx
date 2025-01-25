import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
    const [text] = useTypewriter({
        words: ["Web Developer", "React Developer", "Student", "Learner"],
        loop: {}
    });

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <div className="w-full max-w-2xl mx-auto">
                {/* Fixed left alignment */}
                <span className="block text-6xl text-left">
                    <span className="font-myFont text-blue-800">
                        N i l i n a <span className='inline-block mx-2'></span> N i l a k s h a
                    </span>
                </span>
                <h1 className="text-8xl font-myFont text-red-900 text-left">
                    {text}
                    <Cursor />
                </h1>
            </div>
        </div>
    );
};

export default Hero;
