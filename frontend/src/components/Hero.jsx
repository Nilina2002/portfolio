import React from 'react'
import ProfilePic from "../assets/pf.jpg";

const hero = () => {
    return (
        <div className="flex items-center justify-center mt-10 xl:mt-14">
            {/* Profile Photo */}
            <img
                id="nilina-image"
                src={ProfilePic}
                alt="Photo of Nilina Nilaksha"
                className="cursor-pointer border-gray-900 hover:border-amber-600 shadow-md border-8 h-96 rounded-full duration-300 ease mr-8"
            />
            {/* Text Section */}
            <div className="text-left">
                <p className="text-3xl lg:text-2xl font-extrabold text-gray-900">
                    Hey, I'm <span className="text-amber-600">Nilina Nilaksha.</span>
                    <p>
                        Here, you can check out what I'm working on. I try my best to create things with ❤
                    </p>
                </p>


            </div>
        </div>
    )
}

export default hero;