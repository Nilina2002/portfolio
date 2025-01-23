import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Button from './button'


const Hero = () => {
    const [text] = useTypewriter({
        words: ["Web Developer", "React Developer",
            "Software Engineer"],
        loop: {}

    })

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
            <div>
                <span className="block text-3xl font-extrabold">
                    Hi, I'm
                    Nilina Nilaksha</span>
                <h1 className="text-4xl font-extrabold">{text}
                    <Cursor />
                </h1>
            </div>
            <Button>hi</Button>
        </div>
    )
}

export default Hero